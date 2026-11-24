import fs from "fs"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export default class AuthService{
    constructor(UserRepo){
        this.UserRepo = UserRepo
        try{
            this.JWT_SECRET = fs.readFileSync('public.pem')
        }
        catch{
            this.JWT_SECRET = "SUPER SECRET KEY!!!"
        }
    }

    /**
     * 
     * @param {object} user a valid user object that includes the userid and username
     * @returns {String} this is the JWT that is returned
     */
    assignAccessToken(userid){
        return (jwt.sign(
            {sub: userid},
            this.JWT_SECRET,
            {expiresIn: "15m"}
            )
        )
        
    }

    /**
     * this function generates an access token for the user
     * @param {int} userid this is the unique identification number for the user
     * @returns the JWT that must be returned to the user
     */
    assignRefreshToken(userid){
        return (jwt.sign(
            {sub: userid},
            this.JWT_SECRET,
            {expiresIn: "30d"}
            )
        )
    }

    /**
     * This is the login service. it throws an error if anything goes wrong, else it returns an accesstoken and refreshtoken
     * @param {string} username Username of the user attempting to be logged in
     * @param {string} password Password of the user attempting to login
     * @returns {object} Map of tokens that will be given back to the frontend ordered {access:, refresh:}
     */
    async login(username, password){
        const user = await this.UserRepo.getUserByName(username)

        if( !user )
            throw new Error("Invalid username or password")

        let validpassword = await bcrypt.compare(password, user.passhash)

        if( !validpassword )
            throw new Error("Invalid username or password")
        
        const accesstoken = this.assignAccessToken(user.id)
        const refreshtoken = this.assignRefreshToken(user.id)

        await this.UserRepo.saveRefresh(user.id, refreshtoken)

        return({
            accesstoken,
            refreshtoken
        })
    }
    
    /**
     * This function is used to refresh the access token and the refresh token
     * @param {object} token this is the hashed token passed in by
     * @returns This method returns both a new access and refresh token.
     */
    async refresh(token){
        const payload = jwt.verify(token, this.JWT_SECRET)

        const user = await this.UserRepo.getUserById(payload.sub)

        if(!user)
            throw new Error("User does not exist")

        if(user.refresh != token)
            throw new Error("This is an old refresh token")

        const accesstoken = this.assignAccessToken(user.id)
        const refreshtoken = this.assignRefreshToken(user.id)

        this.UserRepo.saveRefresh(user.id, refreshtoken)


        return({
            accesstoken,
            refreshtoken
        })
    }

    /**
     * This is the middleware method we use to authenticate access tokens for each route
     * @param {string} token this is the stripped token that is passed to be authenticated
     * @returns the user linked to the token
     */
    async authenticate(token){
        let payload = jwt.verify(token, this.JWT_SECRET)

        let user = await this.UserRepo.getUserById(payload.sub)

        if(!user){
            throw new Error("User does not exist")
        }

        return user
    }
}
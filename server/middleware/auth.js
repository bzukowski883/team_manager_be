export class AuthMiddleware{
    constructor(AuthService){
        this.AuthService = AuthService
    }
    async authenticate(req, res, next){
        //validate the token, respond if it is invalid
        let token = req.headers.authorization?.split(" ")[1]
        
        if(!token){
            return res.status(401).json({
                message: "Invalid access token"
            })
        }

        //validate the user, respond if it is invalid, with the reason it is invalid
        try{
            req.user = await this.AuthService.authenticate(token)

            //go to the controller
            next()
        }
        catch(error){
            return res.status(401).json({
                message: error.message
            })
        }
    }
}
import MongoRepository from "./MongoRepository.js"

export default class CalendarRepository extends MongoRepository{
    //inherits from universal db
    constructor(db){
        super(db, "users")
    }

    async getExampleFour(){
        return("WOW! I went a long way for this.")
    }
}
import MongoRepository from "./MongoRepository.js"

export default class MessageBrdRepository extends MongoRepository{
    //inherits from universal db
    constructor(db){
        super(db, "users")
    }

    async findAll() {
        return this.db
            .collection(this.collection)
            .find({})
            .sort({ startTime: 1 })
            .toArray();
    }
}
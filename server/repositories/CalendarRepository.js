import MongoRepository from "./MongoRepository.js"

export default class CalendarRepository extends MongoRepository{
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
    async findById(id) {
        const { ObjectId } = await import("mongodb");

        if (!ObjectId.isValid(id)) return null;

        return this.db
            .collection(this.collection)
            .findOne({ _id: new ObjectId(id) });
    }

    async getExampleFour(){
        return("WOW! I went a long way for this.")
    }
}
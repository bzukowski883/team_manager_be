export default class MongoRepository{
    //we pass the db connection through here to get it to our 
    constructor(db, collection){
        this.db = db
        this.collection = collection
    }

    async delete(){
        //deletes stuff
        return
    }
}
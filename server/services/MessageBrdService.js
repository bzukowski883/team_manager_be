export default class MessageBrdService{
    constructor(MessageBrdRepository){
        this.MessageBrdRepository = MessageBrdRepository
    }

    async getMessages(){
        return this.MessageBrdRepository.findAll();
    }
}
export default class MessageBrdController{
    constructor(MessageBrdService){
        this.MessageBrdService = MessageBrdService;
    }

    getMessages = async (req, res, next) => {
        try{
            const messages = await this.MessageBrdService.getMessages();
            res.status(200).json(messages);
        }catch(err){
            next(err);
        }
    };
}
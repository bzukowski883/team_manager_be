export default class TaskBoardController{
    constructor(TaskBoardService){
        this.TaskBoardService = TaskBoardService;
    }

    getTasks = async (req, res, next) => {
        try{
            const messages = await this.TaskBoardService.getTasks();
            res.status(200).json(messages);
        }catch(err){
            next(err);
        }
    };
}
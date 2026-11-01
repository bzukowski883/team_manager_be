export default class TaskBoardService{
    constructor(TaskBoardRepository){
        this.TaskBoardRepository = TaskBoardRepository
    }

    async getTasks(){
        return this.TaskBoardRepository.findAll();
    }
}
export default class CalendarService{
    constructor(CalendarRepository){
        this.CalendarRepository = CalendarRepository
    }

    async getExampleThree(){
        console.log(await this.CalendarRepository.getExampleFour())
        //this is where we do some logic to determine what we are getting (a or b)
        let item = await this.CalendarRepository.getExampleFour()

        //if item something then change some data
        return item
    }

    async getEvents(){
        return this.CalendarRepository.findAll();
    }

    async getEventById(id){
        const event = await this.CalendarRepository.findById(id);

        if(!event) {
            const error = new Error("Event not found");
            error.status = 404;
            throw error;
        }

        return event;
    }
}
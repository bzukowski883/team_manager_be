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
}
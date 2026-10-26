export default class CalendarController{
    constructor(CalendarService){
        this.CalendarService = CalendarService
    }

    getExampleTwo = async (req, res) => {
        //only try here as any error down stream will report here
        try{
            const data = await this.CalendarService.getExampleThree();
            res.json(data);
        }catch(err){
            res.status(500).json({
                error: err.message
            });
        }
  };

    getEvents = async (req, res, next) => {
        try{
            const events = await this.CalendarService.getEvents();
            res.status(200).json(events);
        }catch(err){
            next(err);
        }
    };

    getEventById = async (req, res, next) => {
        try {
            const event = await this.calendarService.getEventById(req.params.id);
            res.status(200).json(event);
        } catch (error) {
            next(error);
        }
    }
}
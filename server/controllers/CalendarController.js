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
}
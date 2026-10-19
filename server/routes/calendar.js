import { Router } from "express";

export default function(CalendarController){
  const router = Router()

  // GET /api/calendar/example
  router.get("/example", CalendarController.getExampleTwo);

  return router
}
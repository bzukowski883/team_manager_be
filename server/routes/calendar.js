import { Router } from "express";

export default function(CalendarController){
  const router = Router()

  // GET /api/calendar/example
  router.get("/example", CalendarController.getExampleTwo);

  router.get("/events", CalendarController.getEvents);

  router.get("/events/:id", CalendarController.getEventById);

  return router
}
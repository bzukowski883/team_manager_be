import { Router } from "express";

export default function(TaskBoardController){
  const router = Router()

  router.get("/assigned", TaskBoardController.getTasks);

  return router
}
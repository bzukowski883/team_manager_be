import { Router } from "express";

export default function(MessageBrdController){
  const router = Router()

  router.get("/read", MessageBrdController.getMessages);

  return router
}
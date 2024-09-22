import { Router } from "express";
import {
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
  getAllTickets,
} from "./handlers.js";

const router = Router();

router.post("/create", createTicket);

router.get("/get/:id", getTicket);

router.put("/update/:id", updateTicket);

router.delete("/delete/:id", deleteTicket);

router.get("/get", getAllTickets);

export default router;

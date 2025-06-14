import { Router } from "express";
import { getAppts, getApptById, scheduleAppt, cancelAppt } from "../controllers/appt.controller";
import { validateAppt } from "../middlewares/validateAppt";

const apptRouter: Router = Router();

apptRouter.get("/", getAppts);
apptRouter.get("/:id", getApptById);
apptRouter.post("/schedule",validateAppt, scheduleAppt);
apptRouter.put("/cancel", cancelAppt);

export default apptRouter;

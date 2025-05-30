import { Router } from "express";

import userRouter from "./user.routes";
import apptRouter from "./appt.routes";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appts", apptRouter);

export default router;

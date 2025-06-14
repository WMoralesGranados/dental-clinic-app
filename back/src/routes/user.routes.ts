import { Router } from "express";
import {
  getUserById,
  getUsers,
  login,
  register,
} from "../controllers/user.controller";
import { validateRegister } from "../middlewares/validateRegister";

const userRouter: Router = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", validateRegister,register);
userRouter.post("/login", login);

export default userRouter;

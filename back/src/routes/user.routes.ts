import { Router } from "express";
import {
  getUserById,
  getUsers,
  login,
  register,
} from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;

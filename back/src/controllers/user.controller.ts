import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUserService } from "../services/user.service";
import IUser from "../interfaces/IUser";
import ApptDto from "../dto/appt.dto";
import IAppt from "../interfaces/IAppt";
import { createApptService } from "../services/appt.service";
import UserDto from "../dto/user.dto";
import { validateCredentialService } from "../services/credential.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getUserService();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Error getting users", 
      error: error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: IUser = await getUserByIdService(Number(id));
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error getting user",
      error: error,
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const {name, email, username, password}: UserDto = req.body;
    const user: IUser = await createUserService({name, email, username, password});
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error registering user",
      error: error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const {username, password} = req.body;
    const login = await validateCredentialService(username, password);
    res.status(200).json({
      success: true,
      data: login,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: error,
    });
  }
};

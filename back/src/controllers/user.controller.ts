import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK from getUsers" });
};

export const getUserById = async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK from getUserById" });
};

export const register = async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK from register" });
};

export const login = async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK from login" });
};

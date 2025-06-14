import { Request, Response, NextFunction } from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
  const { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    res.status(400).json({
      success: false,
      message: "Missing required fields: name, email, username, and password are all required."
    });
    return;
  }

  next();
};
import { Request, Response, NextFunction } from "express";

export const validateAppt = (req: Request, res: Response, next: NextFunction): void => {
  const { date, time, userId } = req.body;

  if (!date || !time || !userId) {
    res.status(400).json({
      success: false,
      message: "Missing required fields: date, time, and userId are all required."
    });
    return;
  }

  next();
};
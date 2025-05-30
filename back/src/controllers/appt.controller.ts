import { Request, Response } from "express";

export const getAppts = async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK from getAppts" });
};

export const getApptById = async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK from getApptById" });
};

export const scheduleAppt = async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK from scheduleAppt" });
};

export const cancelAppt = async (req: Request, res: Response) => {
  res.status(200).json({ message: "OK from cancelAppt" });
};

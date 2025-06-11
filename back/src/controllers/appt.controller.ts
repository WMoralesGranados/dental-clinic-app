import { Request, Response } from "express";
import IAppt from "../interfaces/IAppt";
import { cancelApptService, createApptService, getApptByIdService, getApptService } from "../services/appt.service";
import ApptDto from "../dto/appt.dto";

export const getAppts = async (req: Request, res: Response) => {
  try {
    const appts: IAppt[] = await getApptService();
    res.status(200).json({
      success: true,
      data: appts,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error getting appts",
      error: e,
    });
  }
};

export const getApptById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appt: IAppt = await getApptByIdService(Number(id));
    res.status(200).json({
      success: true,
      data: appt,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error getting appt",
      error: e,
    });
  }
};

export const scheduleAppt = async (req: Request, res: Response) => {
  try {
    const { date, time, userId } = req.body;
    const appt: IAppt = await createApptService({date, time, userId});
    res.status(200).json({
      success: true,
      data: appt,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error scheduling appt",
      error: e,
    });
  }
};

export const cancelAppt = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const apptId: number = await cancelApptService(Number(id));
    res.status(200).json({
      success: true,
      data: apptId,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error cancelling appt",
      error: e,
    });
  }
};

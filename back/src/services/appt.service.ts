import IAppt from "../interfaces/IAppt";
import { STATUS } from "../enums/enums";
import ApptDto from "../dto/appt.dto";
import app from '../server';

const appts: IAppt[] = [
  {
    id: 1,
    date: new Date(),
    time: "10:00",
    userId: 1,
    status: STATUS.PENDING,
  },
  {
    id: 2,
    date: new Date(),
    time: "10:00",
    userId: 1,
    status: STATUS.ACTIVE,
  },
];

let id: number = 3;

export const getApptService = async (): Promise<IAppt[]> => {
  return appts;
};

export const getApptByIdService = async (id: number): Promise<IAppt> => {
  const appt: IAppt | undefined = appts.find((appt) => appt.id === id);
  if (!appt) {
    throw new Error("Appointment not found");
  }
  return appt;
};

export const createApptService = async (apptData: ApptDto): Promise<IAppt> => {
  const appt: IAppt = {
    id: id,
    date: apptData.date,
    time: apptData.time,
    userId: apptData.userId,
    status: STATUS.ACTIVE,
  };
  appts.push(appt);
  id++;
  return appt;
};

export const cancelApptService = async (id: number): Promise<number> => {
  const appt = await getApptByIdService(id);
  if (appt.status !== STATUS.ACTIVE) {
    throw new Error("Appointment is already cancelled");
  }
  appt.status = STATUS.CANCELLED;
  return appt.id;
};

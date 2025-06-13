import { STATUS } from '../enums/enums';
import ApptDto from "../dto/appt.dto";
import { Appt } from "../entities/Appt";
import { apptModel } from '../models/models';

export const getApptService = async (): Promise<Appt[]> => {
  const appts: Appt[] = await apptModel.find();
  return appts;
};

export const getApptByIdService = async (id: number): Promise<Appt> => {
  const appt: Appt | null = await apptModel.findOneBy({
    id,
  });
  if (!appt) {
    throw new Error("Appointment not found");
  }
  return appt;
};

export const createApptService = async (apptData: ApptDto): Promise<Appt> => {
  const appt: Appt = await apptModel.create({
    ...apptData
  })
  await apptModel.save(appt);
  return appt;
};

export const cancelApptService = async (id: number): Promise<number> => {
  const appt: Appt | null = await getApptByIdService(id);
  if (!appt) {
    throw new Error("Appointment not found");
  }
  await apptModel.update(appt.id, {
    status: STATUS.CANCELLED,
  });
  return appt.id;
};

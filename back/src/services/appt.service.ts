import { STATUS } from '../enums/enums';
import ApptDto from "../dto/appt.dto";
import { AppDataSource } from '../config/data-source';
import { Appt } from "../entities/Appt";

export const getApptService = async (): Promise<Appt[]> => {
  const appts: Appt[] = await AppDataSource.getRepository(Appt).find();
  return appts;
};

export const getApptByIdService = async (id: number): Promise<Appt> => {
  const appt: Appt | null = await AppDataSource.getRepository(Appt).findOneBy({
    id,
  });
  if (!appt) {
    throw new Error("Appointment not found");
  }
  return appt;
};

export const createApptService = async (apptData: ApptDto): Promise<Appt> => {
  const appt: Appt = await AppDataSource.getRepository(Appt).create({
    ...apptData
  })
  await AppDataSource.getRepository(Appt).save(appt);
  return appt;
};

export const cancelApptService = async (id: number): Promise<number> => {
  const appt: Appt | null = await getApptByIdService(id);
  if (!appt) {
    throw new Error("Appointment not found");
  }
  await AppDataSource.getRepository(Appt).update(appt.id, {
    status: STATUS.CANCELLED,
  });
  return appt.id;
};

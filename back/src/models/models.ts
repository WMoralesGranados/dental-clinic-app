import { AppDataSource } from "../config/data-source";
import { Appt } from "../entities/Appt";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

export const userModel = AppDataSource.getRepository(User);

export const apptModel = AppDataSource.getRepository(Appt);

export const credentialModel = AppDataSource.getRepository(Credential); 


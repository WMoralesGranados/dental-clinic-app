import { AppDataSource } from "../config/data-source";
import CredentialDto from "../dto/credential.dto";
import { Credential } from "../entities/Credential";

export const createCredentialService = async ({
  username,
  password,
}: CredentialDto): Promise<Credential> => {
  const credential: Credential = await AppDataSource.getRepository(
    Credential
  ).create({ username, password });
  await AppDataSource.getRepository(Credential).save(credential);
  return credential;
};

export const validateCredentialService = async (
  username: string,
  password: string
): Promise<Credential["id"]> => {
  const credential: Credential | null = await AppDataSource.getRepository(
    Credential
  ).findOneBy({ username });
  if (!credential) {
    throw new Error("Username or password not found");
  }
  if (credential.password !== password) {
    throw new Error("Username or password not found");
  }
  return credential.id;
};

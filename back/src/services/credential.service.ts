import CredentialDto from "../dto/credential.dto";
import { Credential } from "../entities/Credential";
import { credentialModel } from "../models/models";

export const createCredentialService = async ({
  username,
  password,
}: CredentialDto): Promise<Credential> => {
  const credential: Credential = await credentialModel.create({ username, password });
  await credentialModel.save(credential);
  return credential;
};

export const validateCredentialService = async (
  username: string,
  password: string
): Promise<Credential["id"]> => {
  const credential: Credential | null = await credentialModel.findOneBy({ username });
  if (!credential) {
    throw new Error("Username or password not found");
  }
  if (credential.password !== password) {
    throw new Error("Username or password not found");
  }
  return credential.id;
};

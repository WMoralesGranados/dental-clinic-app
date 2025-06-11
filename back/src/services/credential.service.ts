import ICredential from "../interfaces/ICredential";

const credentials: ICredential[] = [
  { id: 1, username: "williammorales", password: "123456" },
  { id: 2, username: "johndoe", password: "123456" },
];

let id: number = 3;

export const createCredentialService = async (
  username: string,
  password: string
): Promise<ICredential["id"]> => {
  const newCredential: ICredential = { id, username, password };
  credentials.push(newCredential);
  id++;
  return newCredential.id;
};

export const validateCredentialService = async (
  username: string,
  password: string
): Promise<ICredential["id"]> => {
  const user: ICredential | undefined = credentials.find(
    credential => credential.username === username
  );
  if (!user) {
    throw new Error("Username or password not found");
  }
  if (user.password !== password) {
    throw new Error("Username or password not found");
  }
  return user.id;
};

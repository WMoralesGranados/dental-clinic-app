import IUser from "../interfaces/IUser";
import UserDto from "../dto/user.dto";
import { createCredentialService } from "./credential.service";

export const users = [
  {
    id: 1,
    name: "William Morales",
    email: "williammorales@gmail.com",
    credentialsID: 1,
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@gmail.com",
    credentialsID: 2,
  },
];

let id: number = 3;

export const getUserService = async (): Promise<IUser[]> => {
  return users;
};

export const getUserByIdService = async (id: number): Promise<IUser> => {
  const user: IUser | undefined = users.find((user) => user.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const createUserService = async ({
  username,
  password,
  ...UserDto
}: UserDto): Promise<IUser> => {
  const user: IUser = {
    id: id,
    name: UserDto.name,
    email: UserDto.email,
    credentialsID: await createCredentialService(username, password),
  };
  users.push(user);
  id++;
  return user;
};

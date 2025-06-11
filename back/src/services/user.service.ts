import UserDto from "../dto/user.dto";
import { createCredentialService } from "./credential.service";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";

export const getUserService = async (): Promise<User[]> => {
  const users: User[] = await AppDataSource.getRepository(User).find();
  return users;
};

export const getUserByIdService = async (id: number): Promise<User> => {
  const user: User | null = await AppDataSource.getRepository(User).findOneBy({ id });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const createUserService = async ({
  username,
  password,
  ...UserDto
}: UserDto): Promise<User> => {
  const user: User = await AppDataSource.getRepository(User).create(UserDto);
  await AppDataSource.getRepository(User).save(user);

  const credentials: Credential = await createCredentialService({username, password});
  user.credential = credentials;
  await AppDataSource.getRepository(User).save(user);

  return user;
} 
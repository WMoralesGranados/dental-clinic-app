import UserDto from "../dto/user.dto";
import { createCredentialService } from "./credential.service";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { userModel } from "../models/models";

export const getUserService = async (): Promise<User[]> => {
  const users: User[] = await userModel.find();
  return users;
};

export const getUserByIdService = async (id: number): Promise<User> => {
  const user: User | null = await userModel.findOneBy({ id });
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
  const user: User = await userModel.create(UserDto);
  await userModel.save(user);

  const credentials: Credential = await createCredentialService({username, password});
  user.credential = credentials;
  await userModel.save(user);

  return user;
} 
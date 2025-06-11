import ICredential from "../interfaces/ICredential";

const credentials: ICredential[] = [
  { id: 1, username: "williammorales", password: "123456" },
  { id: 2, username: "johndoe", password: "123456" },
];

let id: number = 3;

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

export const createCredentialService = async (
  username: string,
  password: string
): Promise<ICredential["id"]> => {
  const newCredential: ICredential = { id, username, password };
  credentials.push(newCredential);
  id++;
  return newCredential.id;
};

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.

export const validateCredentialService = async (
  username: string,
  password: string
): Promise<ICredential["id"]> => {
  const user: ICredential | undefined = credentials.find(
    (credential) => credential.username === username
  );
  if (!user) {
    throw new Error("Username or password not found");
  }
  if (user.password !== password) {
    throw new Error("Username or password not found");
  }
  return user.id;
};

import { compare, hash } from 'bcrypt';

export const hashPassword = async (password: string) => {
  try {
    const result = await hash(password, 10);
    return result;
  } catch (_) {}
};

export const comparePassword = async (password: string, hash: string) => {
  try {
    const result = await compare(password, hash);
    return result;
  } catch (_) {}
};
import bcrypt from 'bcrypt';
import { CONSTANTS } from '@config/constants';

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, CONSTANTS.SALT_ROUNDS);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
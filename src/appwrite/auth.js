// auth.js
import { account } from './appwrite';

export const signup = async (email, password,name) => {
  try {
    const response = await account.create('unique()', email, password,name);
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await account.createEmailPasswordSession(email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
        try {
          const response = await account.get();
          return response;
        } catch (err) {
            throw err;
        }
}
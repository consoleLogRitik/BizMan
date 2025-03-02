// appwrite.js
import { Client, Account } from 'appwrite';

const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECTID) ; 

const account = new Account(client);

export { client, account };
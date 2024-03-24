import { Client,Account, Databases } from "appwrite";
import { AppConst } from "../helper/config";
const client =  new Client();
export const databases = new Databases(client);
client.setEndpoint(AppConst.APP_WRITE_ENDPOINT).setProject(AppConst.APP_WRITE_PROJECT_ID);
export const  account = new Account(client);
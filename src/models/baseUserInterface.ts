import { Document } from  'mongoose'

export interface userInterface extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
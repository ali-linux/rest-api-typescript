import mongoose from 'mongoose';
import bycript from 'bcrypt';
import config from 'config';

export interface userDocument extends mongoose.Document{
  email: string,
  name: string,
  password: string,
  created_at: Date,
  updated_at: Date,
  comparePassword(candidatesPassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {timestamps:true}
)
const User = mongoose.model<userDocument>("User", userSchema);

export default User;

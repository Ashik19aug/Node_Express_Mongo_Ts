import mongoose, { Schema, model } from 'mongoose';

interface UserTypes {
  name: string;email: string;confirm_email: boolean;status: string;password: string;token: string;token_exp: Date;created_at: Date;
}

const UsersSchema = new Schema <UserTypes> ({
  name: {type: String, required: false,},
  email: {type: String, required: true,},
  confirm_email: {type: Boolean, default: true,},
  status: {type: String, required: true,},
  password: {type: String, required: true,},
  token: {type: String, required: true,},
  token_exp: {type: Date, required: false,},
  created_at: {type: Date, default: Date.now,},
});

module.exports = mongoose.model('user', UsersSchema, 'user');

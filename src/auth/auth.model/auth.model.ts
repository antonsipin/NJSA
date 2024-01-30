import { prop } from '@typegoose/typegoose';

export class AuthModel {
  @prop()
  email: string;

  @prop()
  passwordHash: string;

  crearedAt: Date
}

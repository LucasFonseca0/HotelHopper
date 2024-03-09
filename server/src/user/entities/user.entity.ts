import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = Document & User


@Schema()
export class User {}

export const UserSchema = SchemaFactory.createForClass(User)

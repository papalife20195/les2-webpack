import { IUser, TGender } from "./types";

export function createUser(name:string,age:number,gender:TGender):IUser{
   return {
    name,
    age,
    gender,
   }
}
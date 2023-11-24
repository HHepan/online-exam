import {User} from "./user";
import {Clazz} from "./clazz";

export interface Student {
  id: number;

  name: string;

  sno: string;

  clazz: Clazz;

  user: User;
}

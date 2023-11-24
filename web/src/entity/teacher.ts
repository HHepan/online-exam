import {User} from "./user";

export interface Teacher {
  id: number;

  name: string;

  phone: string;

  user: User;
}

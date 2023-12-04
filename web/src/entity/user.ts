import {Student} from "./student";
import {Teacher} from "./teacher";

export interface User {
  id: number;

  username: string;

  password: string;

  role: number;

  student: Student;

  teacher: Teacher;
}

export const UserRole = {
  ADMIN: '0',
  TEACHER: '1',
  STUDENT: '2'
}

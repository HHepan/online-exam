import {User} from "./user";
import {Clazz} from "./clazz";

export interface Exam {
  id: number;

  name: string;

  questionCount: number;

  score: number;

  startTime: number;

  endTime: number;

  user: User;

  state: number;

  clazzes: Clazz[];
}

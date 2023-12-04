import {Course} from "./course";
import {Question} from "./question";

export interface QuestionBank {
  id: number;

  name: string;

  course: Course;

  questions: Question[];
}

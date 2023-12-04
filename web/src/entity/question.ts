import {QuestionBank} from "./questionBank";

export interface Question {
  id: number;

  stem: string;

  options: string;

  answer: string;

  questionBank: QuestionBank
}

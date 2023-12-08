import {Student} from "./student";
import {Exam} from "./exam";
import {Question} from "./question";

export interface AnswerStatus {
  id: number;

  student: Student;

  exam: Exam;

  question: Question;

  stuAnswer: string;

  correctAnswer: string;
}

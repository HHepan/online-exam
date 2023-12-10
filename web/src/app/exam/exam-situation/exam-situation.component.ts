import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExamService} from "../../../service/exam.service";
import {StudentService} from "../../../service/student.service";
import {environment} from "../../../environments/environment";
import {Page} from "../../common/page";
import {Student} from "../../../entity/student";
import {Exam} from "../../../entity/exam";
import {AnswerStatusService} from "../../../service/answer-status.service";

@Component({
  selector: 'app-exam-situation',
  templateUrl: './exam-situation.component.html',
  styleUrls: ['./exam-situation.component.css']
})
export class ExamSituationComponent implements OnInit{
  examId: number | undefined;

  exam: Exam | undefined;

  param = {
    page: 0,
    size: environment.size,
    name: '',
    sno: '',
  };

  studentsExamStatuses: {
    studentId: number,
    status: string
  }[] = []

  studentsExamStatus: string = '';

  pageData = new Page<Student>();

  constructor(private route: ActivatedRoute,
              private examService: ExamService,
              private studentService: StudentService,
              private answerStatusService: AnswerStatusService) {
    this.examId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.examService.getById(this.examId ? this.examId : 0)
      .subscribe(exam => {
        this.exam = exam;
        const clazzIds = exam.clazzes.map(clazz => clazz.id);
        this.studentService.pageByClazzIds(this.param, clazzIds).subscribe(data => {
          this.pageData = data;
          this.getExamStatusOfAllStudents(data.content);
        });
      });
  }

  /**
   * 点击分页
   * @param page 当前页
   */
  onPageChange(page: number): void {
    this.param.page = page;
    this.reload();
  }

  /**
   * 点击改变每页大小
   * @param size 每页大小
   */
  onSizeChange(size: number): void {
    this.param.size = size;
    this.reload();
  }

  /**
   * 查询
   */
  reload(): void {
    this.studentService.page(this.param);
  }

  getExamStatusOfAllStudents(students: Student[]) {
    students.forEach(student => {
      this.answerStatusService.getAllByExamIdAndStudentId(
        this.examId ? this.examId : 0,
        student.id
      ).subscribe(res => {
        let status = '';
        if (res.length > 0) {
          status = 'submitted';
        } else {
          status = 'examing';
        }
        const tmp = {
          studentId: student.id,
          status
        };
        this.studentsExamStatuses.push(tmp);
      });
    });
  }

  getExamStatusByStudentId(id: number) {
    this.studentsExamStatuses.forEach(item => {
      if (item.studentId === id) {
        this.studentsExamStatus = item.status;
      }
    });
  }
}

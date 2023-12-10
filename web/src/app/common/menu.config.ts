import {BaseMenu} from './base-menu';
import {UserRole} from "../../entity/user";

/**
 * 菜单配置
 */
export const menus: Array<BaseMenu> = [
  {
    name: '首页',
    url: 'dashboard',
    icon: '',
    role: UserRole.ADMIN + ';' + UserRole.TEACHER + ';' + UserRole.STUDENT,
  },
  {
    name: '教师管理',
    url: 'teacher',
    icon: '',
    role: UserRole.ADMIN,
  },
  {
    name: '班级管理',
    url: 'clazz',
    icon: '',
    role: UserRole.ADMIN,
  },
  {
    name: '学生管理',
    url: 'student',
    icon: '',
    role: UserRole.ADMIN,
  },
  {
    name: '课程管理',
    url: 'course',
    icon: '',
    role: UserRole.ADMIN,
  },
  {
    name: '题库管理',
    url: 'questionBank',
    icon: '',
    role: UserRole.ADMIN,
  },
  {
    name: '考试管理',
    url: 'exam',
    icon: '',
    role: UserRole.TEACHER,
  },
  {
    name: '我的考试',
    url: 'my-exam',
    icon: '',
    role: UserRole.STUDENT,
  },
  {
    name: '个人中心',
    url: 'personal',
    icon: '',
    role: UserRole.ADMIN + ';' + UserRole.TEACHER + ';' + UserRole.STUDENT,
  },
];

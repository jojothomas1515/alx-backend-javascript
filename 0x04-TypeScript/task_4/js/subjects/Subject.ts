/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}

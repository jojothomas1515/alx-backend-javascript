/* eslint-disable @typescript-eslint/no-namespace */
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // eslint-disable-next-line no-undef
  export class Cpp extends Subject {
    // eslint-disable-next-line class-methods-use-this
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

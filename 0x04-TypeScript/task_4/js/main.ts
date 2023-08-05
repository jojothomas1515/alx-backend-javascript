/* eslint-disable no-undef */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string | symbol | number]: unknown;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return [firstName.substring(0, 1), lastName].join('. ');
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
  firstName: string;

  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // eslint-disable-next-line class-methods-use-this
  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

function createDummyStudent(StudentClass: StudentConstructor): StudentInterface {
  return new StudentClass('jojo', 'thomas');
}

const jj: StudentInterface = createDummyStudent(StudentClass);

console.log(jj.displayName());
console.log(jj.workOnHomework());

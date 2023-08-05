/* eslint-disable class-methods-use-this */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

type DT = Director | Teacher

function createEmployee(salary: number | string): DT {
  this.salary = Number(salary);
  if (this.salary <= 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: DT): boolean {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}

function executeWork(employee: DT) {
  let res: string;
  if (employee instanceof Director) {
    res = employee.workDirectorTasks();
  } else {
    res = employee.workTeacherTasks();
  }
  console.log(res);
}

const emp: DT = createEmployee(1000);

type Subjects = 'History' | 'Math';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

executeWork(emp);
console.log(teachClass('Math'));

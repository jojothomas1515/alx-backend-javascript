/* eslint-disable no-undef */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1: Student = {
  firstName: 'Joseph', lastName: 'Thomas', age: 94, location: 'Nigeria',
};
const s2: Student = {
  firstName: 'Regina', lastName: 'Thomas', age: 92, location: 'Nigeria',
};

const studentList: Student[] = [s1, s2];

const table = document.createElement('table') as HTMLTableElement;

studentList.forEach((student) => {
  const row = document.createElement('tr') as HTMLTableRowElement;
  const firstName = document.createElement('td') as HTMLTableCellElement;
  const location = document.createElement('td') as HTMLTableCellElement;
  firstName.textContent = student.firstName;
  location.textContent = student.location;
  row.append(firstName, location);
  table.appendChild(row);
});

document.getElementsByTagName('body')[0].appendChild(table);

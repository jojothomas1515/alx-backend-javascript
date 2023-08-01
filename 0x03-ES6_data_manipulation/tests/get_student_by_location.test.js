/* eslint-disable */
import getStudentsByLocation from '../2-get_students_by_loc';
import getListStudents from '../0-get_list_students';

const students = getListStudents();

test('test getting student from san fransisco', () => {

  expect(getStudentsByLocation(students, 'San Francisco'))
    .toStrictEqual(
      [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
      ]
    );
}

);
test('test getting student from Columbia', () => {
  expect(getStudentsByLocation(students, 'Columbia'))
    .toStrictEqual(
      [
        { id: 2, firstName: 'James', location: 'Columbia' },
      ]
    );
}
);
test('test getting student from location not in the any object', () => {
  expect(getStudentsByLocation(students, 'New York'))
    .toStrictEqual(
      []
    );
}
);

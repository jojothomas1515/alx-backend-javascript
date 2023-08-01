/* eslint-disable */
import getListStudentIds from '../1-get_list_student_ids';
import getListStudents from '../0-get_list_students';

test('testing the id array from student list', () => {
  expect(getListStudentIds(getListStudents()))
    .toStrictEqual([1, 2, 5]);
});

test('testing the id array from student list', () => {
  expect(getListStudentIds()).toStrictEqual([]);
});


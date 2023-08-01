/* eslint-disable */
import getListStudents from "../0-get_list_students.js";
import getStudentIdsSum from "../3-get_ids_sum.js";

const students = getListStudents();

test('test the sum of ids for students returned by getListStudents',
  () => {
    expect(getStudentIdsSum(students)).toBe(8);
  }
);

test('test the sum return for a non array object',
  () => {
    expect(getStudentIdsSum('hello')).toBe(0);
  }
);

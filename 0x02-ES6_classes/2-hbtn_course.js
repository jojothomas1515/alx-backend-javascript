export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    } else if (!(students instanceof Array)
      && students.every((x) => typeof x !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
}

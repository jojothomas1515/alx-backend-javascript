import { readFile } from 'fs';
import { promisify } from 'util';

export default async function readDatabase(fileName) {
  try {
    const resObj = {};
    const rf = promisify(readFile);
    const data = await rf(fileName || '', { encoding: 'utf8' });
    const students = data.trim().split('\n').slice(1);
    students.forEach((student) => {
      const sp = student.split(',');
      const [fn, ln, age, field] = sp;
      if (fn || ln || age || field) {
        if (Object.prototype.hasOwnProperty.call(resObj, field)) {
          resObj[field].push(fn);
        } else {
          resObj[field] = [fn];
        }
      }
    });
    return Promise.resolve(resObj);
  } catch (err) {
    return Promise.reject(Error('Cannot load the database'));
  }
}

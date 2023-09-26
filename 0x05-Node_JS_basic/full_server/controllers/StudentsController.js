import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    res.write('This is the list of our students\n');
    try {
      const resp = await readDatabase('database.csv');
      const fields = Object.getOwnPropertyNames(resp).sort();
      fields.forEach((field) => {
        const students = resp[field];
        const len = students.length;
        return res.write(`Number of students in ${field}: ${len}. List: ${students.join(', ')}\n`);
      });
      return res.end();
    } catch (err) {
      res.write(err.message);
      return res.end();
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const mj = ['CS', 'SWE'];

    if (!mj.includes(major)) {
      return res.send('Major parameter must be CS or SWE').status(500);
    }
    try {
      const resp = await readDatabase('database.csv');
      const fields = Object.getOwnPropertyNames(resp).sort();
      fields.forEach((field) => {
        if (field === major) {
          const students = resp[field];
          const len = students.length;
          res.write(`Number of students in ${field}: ${len}. List: ${students.join(', ')}`);
        }
      });
      return res.end();
    } catch (err) {
      res.write(err.message);
      return res.end();
    }
  }
}

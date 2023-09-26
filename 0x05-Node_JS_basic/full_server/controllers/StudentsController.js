import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    response.write('This is the list of our students\n');
    try {
      const responsep = await readDatabase(process.argv[2]);
      const fields = Object.getOwnPropertyNames(responsep).sort();
      fields.forEach((field) => {
        const students = responsep[field];
        const len = students.length;
        return response.write(
          `Number of students in ${field}: ${len}. List: ${students.join(', ')}\n`
        );
      });
      return response.end();
    } catch (err) {
      response.write(err.message);
      return response.end();
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const mj = ['CS', 'SWE'];

    if (!mj.includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const responsep = await readDatabase(process.argv[2]);
      const fields = Object.getOwnPropertyNames(responsep).sort();
      fields.forEach((field) => {
        if (field === major) {
          const students = responsep[field];
          response.write(`List: ${students.join(', ')}`);
        }
      });
      return response.end();
    } catch (err) {
      response.write(err.message);
      return response.end();
    }
  }
}

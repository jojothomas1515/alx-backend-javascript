export default function updateStudentGradeByCity(students, location, grades) {
  if (Array.isArray(students) && Array.isArray(grades)) {
    return students.filter((student) => student.location === location)
      .map((student) => {
        const grade = grades.filter((grade) => grade.studentId === student.id)[0];
        if (grade !== undefined) {
          return { ...student, grade: grade.grade };
        }
        return { ...student, grade: 'N/A' };
      });
  }
  return [];
}

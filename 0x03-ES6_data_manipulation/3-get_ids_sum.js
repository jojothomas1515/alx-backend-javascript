function idSum(acc, val) {
  return acc + val.id;
}
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce(idSum, 0);
  }
  return 0;
}

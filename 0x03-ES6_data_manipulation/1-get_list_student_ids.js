export default function getListStudentIds(listArr) {
  if (Array.isArray(listArr)) {
    return listArr.map((student) => student.id);
  }
  return [];
}

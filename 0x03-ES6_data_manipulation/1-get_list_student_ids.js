export default function getListStudentIds(listArr = []) {
  return listArr.map((student) => student.id);
}

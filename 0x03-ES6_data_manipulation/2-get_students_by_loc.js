export default function getStudentsByLocation(stList, location) {
  if (Array.isArray(stList)) {
    return stList.filter((student) => student.location === location);
  }
  return [];
}

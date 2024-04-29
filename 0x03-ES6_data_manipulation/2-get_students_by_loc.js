export default function getStudentsByLocation(array, city) {
  if (!(Array.isArray(array)) || !array || !city) {
    return [];
  }
  return array.filter((student) => (student.location === city));
}

export default function getStudentsByLocation(students, city) {
  if (!(students.isstudents(students)) || !students || !city) {
    return [];
  }
  return students.filter((student) => (student.location === city));
}

export default function getStudentsByLocation(array, city) {
  if (!(Array.isArray(array)) || !array || !city) { 
    return [];
  } else {
    return array.filter(student => student.location === city);
  }
}

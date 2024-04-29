export default function getListStudentIds(array) {
  if (!(Array.isArray(array)) || !array) { 
    return [];
  } else {
    return array.map(({id, firstname, location}) => id);
  }
}

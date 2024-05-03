/* eslint-disable no-unused-vars */
export default function getListStudentIds(array) {
  if (!(Array.isArray(array)) || !array) {
    return [];
  }
  return array.map(({ id, firstName, location }) => id);
}

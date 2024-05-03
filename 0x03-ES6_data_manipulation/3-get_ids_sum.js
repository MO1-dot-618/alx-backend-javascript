export default function getStudentIdsSum(array) {
  if (Array.isArray(array) && array) {
    const array_ids = array.map(({ id }) => parseInt(id, 10)).filter(num => !isNaN(num));
    const sum = array_ids.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
    return sum;
  }
  return 0;
}

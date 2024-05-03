export default function getStudentIdsSum(array) {
  if (Array.isArray(array) && array) {
    const arrayIds = array.map(({ id }) => parseInt(id, 10)).filter((num) => !Number.isNaN(num));
    const sum = arrayIds.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
    return sum;
  }
  return 0;
}

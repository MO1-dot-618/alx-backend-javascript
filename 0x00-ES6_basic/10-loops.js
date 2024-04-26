export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const value of array) {
    array2.append(appendString + value);
  }

  return array2;
}

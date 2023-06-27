export default function appendToEachArrayValue(array, appendString) {
  const appendedArray = [];
  for (let value of array) {
    appendedArray.push(appendString + value);
  }

  return appendedArray;
}

/* eslint-disable array-callback-return */
/* eslint no-return-assign: "error" */
export default function hasValuesFromArray(set, array) {
  let isTrue = true;
  array.map((item) => !set.has(item) && (isTrue = false));
  return isTrue;
}

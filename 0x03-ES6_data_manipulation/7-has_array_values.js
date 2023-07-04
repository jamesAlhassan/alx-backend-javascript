export default function hasValuesFromArray(set, array) {
  const filtered = set.map((item) => {
    array.map((arrItem) => {
      if (item === arrItem) {
        return true;
      }
      return false;
    });
    return filtered;
  });
}

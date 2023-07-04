export default function getStudentIdsSum(arr) {
  const sum = arr.reduce(
    arr.reduce((total, currentValue) => {
      return total + currentValue.id;
    }, 0)
  );
  return sum;
}

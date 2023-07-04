export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, cv) => acc + cv.id, 0);
}

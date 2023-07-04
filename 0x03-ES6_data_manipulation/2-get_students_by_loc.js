export default function getStudentsByLocation(arr, city) {
  const arrOfObjsByCity = arr.filter((item) => item.location === city);
  return arrOfObjsByCity;
}

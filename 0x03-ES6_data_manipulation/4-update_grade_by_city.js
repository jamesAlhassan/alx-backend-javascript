export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filteredArrayByCity = arr.filter((item) => item.location === city);
  console.log(filteredArrayByCity);
}

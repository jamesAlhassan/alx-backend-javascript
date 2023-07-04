export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filteredArrayByCity = arr.filter((item) => item.city === city);
  console.log(filteredArrayByCity);
}

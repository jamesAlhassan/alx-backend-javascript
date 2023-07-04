export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filteredArrayByCity = arr.filter((item) => item.location === city);
  return filteredArrayByCity.map((item) => ({
    ...item,
    grade: newGrades[0].grade,
  }));
}

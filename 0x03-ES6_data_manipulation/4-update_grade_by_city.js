/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  const filteredArrayByCity = arr
    .filter((items) => items.location === city)
    .map((item) => {
      newGrades.map((gradesItem) => {
        if (gradesItem.studentId === item.id) {
          item.grade = gradesItem.grade;
        }
        if (!item.hasOwnProperty('grade')) {
          item.grade = 'N/A';
        }
        return item;
      });
      return item;
    });
  return filteredArrayByCity;
}

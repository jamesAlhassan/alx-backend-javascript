interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "James",
  lastName: "Alhassan",
  age: 10,
  location: "Ghana",
};

const student2: Student = {
  firstName: "Ramatu",
  lastName: "Hussein",
  age: 11,
  location: "Ghana",
};

const studentsList = [student1, student2];

const table = document.getElementById("stdTable") as HTMLTableElement;

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

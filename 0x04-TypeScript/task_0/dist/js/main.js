var student1 = {
    firstName: "James",
    lastName: "Alhassan",
    age: 10,
    location: "Ghana",
};
var student2 = {
    firstName: "Ramatu",
    lastName: "Hussein",
    age: 11,
    location: "Ghana",
};
var studentsList = [student1, student2];
var table = document.getElementById("stdTable");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
//# sourceMappingURL=main.js.map
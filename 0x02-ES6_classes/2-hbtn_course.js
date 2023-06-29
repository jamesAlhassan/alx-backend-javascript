export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string")
      throw new TypeError(`${name} must be a string`);

    if (typeof length !== "number")
      throw new TypeError(` ${length} must be a number`);
    if (!Array.isArray(students))
      throw new TypeError(`${students} students type must be an Array`);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name === "string") {
      this._name = name;
    }
  }
  set length(length) {
    if (typeof length === "number") {
      this._length = length;
    }
  }
  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    }
  }
}

/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArray(students, 'students');
  }

  /* Getters and setters */
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this._validateString(name, 'name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateNumber(value, 'length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateArray(value, 'students');
  }

  /* Validation methods */
  // eslint-disable-next-line class-methods-use-this
  _validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array`);
    } else if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }
}

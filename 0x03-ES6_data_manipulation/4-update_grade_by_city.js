export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradedStudents = students.map((student) => {
    const gradey = newGrades.filter((gradeObject) => gradeObject.studentId === student.id);
    return {
      ...student,
      grade: gradey.length > 0 ? parseInt(gradey[0].grade, 10) : 'N/A',
    };
  });
  return gradedStudents.filter((student) => student.location === city);
}
import getListStudents from "./0-get_list_students.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
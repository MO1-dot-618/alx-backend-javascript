export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    if (student.location === city) {
      const gradey = newGrades.filter((gradeObject) => gradeObject.studentId === student.id);
      if (gradey.length > 0) {
        return { ...student, grade: parseInt(gradey[0].grade) };
      } else {
        return { ...student, grade: 'N/A' };
      }
    }
    return student;
  });
}

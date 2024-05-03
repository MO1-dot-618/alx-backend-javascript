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

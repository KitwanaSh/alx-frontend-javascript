export default function updateStudentGradeByCity(arr, city, newGrades) {
    return  arr.filter((loc) => loc.location === city)
        .map((std) => {
            const grades = newGrades.filter((el) => el.studentId === std.id);
            const grade = grades.length ? grades[0].grade : 'N/A';
            return {
                ...std,
                grade,
            };
        });
}

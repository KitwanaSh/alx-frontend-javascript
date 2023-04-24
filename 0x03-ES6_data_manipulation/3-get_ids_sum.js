import getListStudents from "./0-get_list_students";

export default function getStudentIdsSum(student = getListStudents()) {
    return student.reduce((acc, curr) => acc + curr.id, 0);
}
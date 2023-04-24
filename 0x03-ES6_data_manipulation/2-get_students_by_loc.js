import getListStudents from "./0-get_list_students";

export default function getStudentsByLocation(student = getListStudent(), city) {
    return student.filter((loc) => loc.location === city)
}
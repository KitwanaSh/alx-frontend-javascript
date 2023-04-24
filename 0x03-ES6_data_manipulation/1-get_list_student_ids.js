import getListStudents from "./0-get_list_students";

export default function getListStudentIds(objs) {
    if (!Array.isArray(objs)) {
        return []
    }
    else {
        return objs.map((el) => el.id)
    }
}
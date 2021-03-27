import {getAllStudents, saveStudent} from "../database/StudentDatabase"

export const saveStudentController = (req, res) =>{

    const {nameStudent, ageStudent} = req.body;

    const newStudent = saveStudent(nameStudent, ageStudent);
    return res.json(newStudent)

}
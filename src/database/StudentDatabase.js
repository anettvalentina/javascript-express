import {sequelize} from "./config/database"


export const saveStudent = (nameVariable, pepito) =>{

    const [result, metadata] = sequelize.query('INSERT INTO Student (nameStudent, ageStudent) VALUES( :nameStudent, :ageStudent)', {
        replacements: {
            nameStudent: nameVariable,
            ageStudent: pepito
        }
    })
    return "student was saved"

}

export const getAllStudents = async () => {

    try{
        const [results, metadata] = await sequelize.query('SELECT * FROM Student')
        console.log(results)
        return results;
    }catch(error){
        console.log(error)
    }
}


export const saveTeacher = (nameVariable, ageVariable, experienceYearsVariable) =>{

    const [result, metadata] = sequelize.query('INSERT INTO Teacher (nameTeacher, ageTeacher, experienceYears ) VALUES( :nameTeacher, :ageTeacher, :experienceYears)', {
        replacements: {
            nameTeacher: nameVariable,
            ageTeacher: ageVariable,
            experienceYears: experienceYearsVariable
        }
    })

}

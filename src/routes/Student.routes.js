import {Router} from "express"


import {saveStudentController} from "../controller/StudentController"

const router = Router();

router.route("/student")
.post(saveStudentController)


export default router;
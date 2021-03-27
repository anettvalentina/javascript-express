import express, {json} from "express"
import morgan from "morgan"
import studentRoutes from "./routes/Student.routes"

const app = express();

app.use(json())
app.use(morgan("dev"))

app.use("/student", studentRoutes)


const PORT = 5001
app.listen(PORT)
console.log(`Port is running in port ${PORT}`)
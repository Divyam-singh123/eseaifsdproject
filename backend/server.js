const express=require("express")
const cors=require("cors")
require("dotenv").config()

const connectDB=require("./config/db")

const employeeRoutes=
require("./routes/employeeRoutes")

const authRoutes=
require("./routes/authRoutes")

const aiRoutes=
require("./routes/aiRoutes")

connectDB()

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{

res.send("API Running")

})

app.use(
"/api/employees",
employeeRoutes
)

app.use(
"/api/auth",
authRoutes
)

app.use(
"/api/ai",
aiRoutes
)

const PORT=
process.env.PORT||5000

app.listen(PORT,()=>{

console.log(
`Server running on ${PORT}`
)

})
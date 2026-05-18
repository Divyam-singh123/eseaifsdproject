const Employee =
require("../models/Employee")

// ADD
const addEmployee =
async(req,res)=>{

try{

const employee=
await Employee.create(
req.body
)

res.status(201).json({
success:true,
data:employee
})

}catch(error){

res.status(500).json({
message:error.message
})

}

}


// GET ALL
const getEmployees=
async(req,res)=>{

try{

const employees=
await Employee.find()

res.status(200).json({

success:true,
count:employees.length,
data:employees

})

}catch(error){

res.status(500).json({
message:error.message
})

}

}


// SEARCH
const searchEmployee=
async(req,res)=>{

try{

const employees=
await Employee.find({

department:
req.query.department

})

res.status(200).json({

success:true,
data:employees

})

}catch(error){

res.status(500).json({
message:error.message
})

}

}


// UPDATE
const updateEmployee=
async(req,res)=>{

try{

const employee=
await Employee.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

)

res.json({

success:true,
data:employee

})

}catch(error){

res.status(500).json({
message:error.message
})

}

}


// DELETE
const deleteEmployee=
async(req,res)=>{

try{

await Employee.findByIdAndDelete(
req.params.id
)

res.json({

success:true,
message:
"Employee Deleted"

})

}catch(error){

res.status(500).json({
message:error.message
})

}

}


module.exports={

addEmployee,
getEmployees,
searchEmployee,
updateEmployee,
deleteEmployee

}
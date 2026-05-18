import { useState } from "react"
import api from "../services/api"

function EmployeeForm(){

const [form,setForm]=useState({

name:"",
email:"",
department:"",
skills:"",
performanceScore:"",
experience:""

})

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

})

}

const handleSubmit=
async(e)=>{

e.preventDefault()

try{

const payload={

...form,

skills:
form.skills
.split(",")

}

await api.post(
"/api/employees",
{
...payload,

performanceScore:
Number(
payload.performanceScore
),

experience:
Number(
payload.experience
)

}
)

alert(
"Employee Added"
)

console.log(res.data)

}catch(error){

console.log(error)

alert(
"Error adding employee"
)

}

}

return(

<div>

<h2>
Add Employee
</h2>

<form
onSubmit=
{handleSubmit}
>

<input
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
/>

<br/><br/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>

<br/><br/>

<input
type="text"
name="department"
placeholder="Department"
onChange={handleChange}
/>

<br/><br/>

<input
type="text"
name="skills"
placeholder=
"React,Node,MongoDB"
onChange={handleChange}
/>

<br/><br/>

<input
type="number"
name="performanceScore"
placeholder=
"Performance Score"
onChange={handleChange}
/>

<br/><br/>

<input
type="number"
name="experience"
placeholder=
"Experience"
onChange={handleChange}
/>

<br/><br/>

<button>
Add Employee
</button>

</form>

</div>

)

}

export default EmployeeForm
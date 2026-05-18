import {useEffect,useState}
from "react"

import api from "../services/api"

import SearchFilter
from "../components/SearchFilter"

function EmployeeList(){

const [employees,
setEmployees]=
useState([])

useEffect(()=>{

fetchEmployees()

},[])

const fetchEmployees=
async()=>{

const res=
await api.get(
"/api/employees"
)

setEmployees(
res.data.data
)

}

return(

<div>

<h1>
Employee List
</h1>

<SearchFilter
setEmployees=
{setEmployees}
/>

{

employees.map(
(emp)=>(

<div
key={emp._id}
style={{

border:
"1px solid white",

margin:"10px",

padding:"10px"

}}
>

<h3>
{emp.name}
</h3>

<p>
{emp.department}
</p>

<p>
Score:
{emp.performanceScore}
</p>

</div>

))

}

</div>

)

}

export default EmployeeList
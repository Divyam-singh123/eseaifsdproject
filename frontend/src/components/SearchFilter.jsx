import {useState} from "react"
import api from "../services/api"

function SearchFilter({setEmployees}){

const [department,setDepartment]=
useState("")

const search=async()=>{

const res=
await api.get(
`/api/employees/search?department=${department}`
)

setEmployees(
res.data.data
)

}

return(

<div>

<input
placeholder="Department"
onChange={(e)=>
setDepartment(
e.target.value
)}
/>

<button onClick={search}>
Search
</button>

</div>

)

}

export default SearchFilter
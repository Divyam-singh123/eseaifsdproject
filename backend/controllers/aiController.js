const axios=require("axios")

const recommend=
async(req,res)=>{

try{

const employee=req.body

const prompt=`

Employee Name:
${employee.name}

Department:
${employee.department}

Skills:
${employee.skills}

Performance Score:
${employee.performanceScore}

Experience:
${employee.experience}

Analyze and provide:

1. Promotion recommendation
2. Training suggestions
3. Feedback
4. Ranking insight

`

const response=
await axios.post(

"https://openrouter.ai/api/v1/chat/completions",

{
model:"openai/gpt-3.5-turbo",

messages:[
{
role:"user",
content:prompt
}
]
},

{
headers:{
Authorization:
`Bearer ${process.env.OPENROUTER_API_KEY}`,
"Content-Type":
"application/json"
}
}

)

res.json({

success:true,

recommendation:
response.data
.choices[0]
.message
.content

})

}catch(error){

console.log(error.response?.data || error)

res.status(500).json({
message:"AI Error"
})

}

}

module.exports={
recommend
}
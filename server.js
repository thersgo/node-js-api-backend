import express from "express"
import path    from "path"

const application = express()
const PORT        = 3000
const here        = import.meta.dirname

application.get(`/`, (request, response) => {
	response.sendFile(path.join(here, "/views/greet.html"))
})

application.get(`/mina`, (request, response) => {
	response.send({message: `Ma olen veebiserver! Mind lõi Henri :)`})
})

application.listen(PORT, () =>{
	console.log(`Let's get this show on the road!`)
	console.log(`Port: ${PORT}; path: ${here}`)
})


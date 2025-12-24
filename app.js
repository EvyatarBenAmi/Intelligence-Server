import express from "express"
import routerUser from "./routes/usersR.js"
import routerDebug from "./routes/debugR.js"
import routerAgent from "./routes/agentsR.js"

const app = express()
const port = 3000
app.use(express.json())


app.use("/health",routerDebug)
app.use("/users", routerUser)
app.use("/agents",routerAgent)



app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})
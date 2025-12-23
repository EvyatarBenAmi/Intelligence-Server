import express from "express"
import routerUser from "./routes/usersR.js"

const app = express()
const port = 3000
app.use(express.json())

app.get("/health", (req, res) => {
    res.send({ ok: true })
})

app.use("/users", routerUser)




app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})
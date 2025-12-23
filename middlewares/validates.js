import { readJson } from "../utils/funcFs.js"

export const validateUser = async (req,res,next)=>{
    try {
        const data = await readJson("./DB/users.json")
        const username = req.headers['x-username']
        const password = req.headers['x-password']
        const user = data.find(value=> value['x-password'] == password && value['x-username'] === username )
        user?next():res.status(401).send(`Invalid user!`)
    } catch (error) {
        res.send(`Error: `, error)
    }
};
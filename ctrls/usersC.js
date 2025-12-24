import { readJson, write } from "../utils/funcFs.js"


export const getAllUsers = async (req, res) => {
    try {
        res.send(await readJson("./DB/users.json"))
    } catch (error) {
        res.send(`Error: `, error)
    }
};

export const creatUser = async (req, res) => {
    try {
        const data = await readJson("./DB/users.json")
        const username = req.body.username
        const password = req.body.password
        const user = data.find(value => value.username === username)
        user ? res.send(`Username unlawful`) : data.push({ "password": password, "username": username })
        await write("./DB/users.json", data)
        res.send(await readJson("./DB/users.json"))
    } catch (error) {
        res.send(`Error: `, error)
    }
};

export const updatPasswordUser = async (req, res) => {
    try {
        const data = await readJson("./DB/users.json")
        const username = req.params.username
        const newPassword = req.body.password
        const user = data.find(value => value.username === username)
        user ? user.password = newPassword : res.send(`error`)
        await write("./DB/users.json", data)
        res.send(await readJson("./DB/users.json"))
    } catch (error) {
        res.send(`Error: `, error)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const data = await readJson("./DB/users.json")
        const username = req.params.username
        const index = data.findIndex(user => user.username === username)
        index != -1 ? data.splice(index, 1) : res.send(`Username unlawful`)
        await write("./DB/users.json", data)
        res.send(await readJson("./DB/users.json"))
    } catch (error) {
        res.send(`Error: `, error)
    }
};
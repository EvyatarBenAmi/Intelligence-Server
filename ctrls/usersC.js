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
        const user = data.find(value => value['x-username'] === username)
        user ? res.send(`Username unlawful`) : data.push({ "x-password": password, "x-username": username })
        await write("./DB/users.json", data)
        res.send(await readJson("./DB/users.json"))
    } catch (error) {
        res.send(`Error: `, error)
    }
};


// צריך לסדר את השינוי בפועל של הסיסמה בלי למחוק את האובייקט וליצור חדש
// export const updatPasswordUser = async (req, res) => {
//     const data = await readJson("./DB/users.json")
//     const username = req.params.username
//     const newPassword = req.body.password
//     const user = data.find(value => value['x-username'] === username)
//     // console.log(user)
//     // user ? user["x-password"] = newPassword : return res.send(`error`)
//     if (user){
//         user["x-password"] = newPassword 
        
//     }
// }
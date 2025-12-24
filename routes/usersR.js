import express from "express"
import { getAllUsers, creatUser, updatPasswordUser, deleteUser } from "../ctrls/usersC.js"
import { validateUser } from "../middlewares/validates.js"


const router = express.Router();


router.get("/", validateUser, getAllUsers)
router.post("/", validateUser, creatUser)
router.put("/:username", validateUser, updatPasswordUser)
router.delete("/:username", validateUser, deleteUser)

export default router
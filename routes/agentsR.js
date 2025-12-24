import express from "express"
import { validateUser } from "../middlewares/validates.js"
import { getAllAgent, getAgentById, creatAgent, updatAgentById, deleteAgentById } from "../ctrls/agentsC.js";

const router = express.Router();


router.get("/", getAllAgent)
router.get("/:id", getAgentById)
router.post("/", validateUser, creatAgent)
router.put("/:id", validateUser, updatAgentById)
router.delete("/:id", validateUser, deleteAgentById)


export default router
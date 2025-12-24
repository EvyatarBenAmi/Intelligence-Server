import express from "express"
import {getTrue} from "../ctrls/debugC.js"

const router = express.Router();


router.get("/",getTrue)


export default router
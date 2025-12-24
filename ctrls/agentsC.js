import { readJson, write } from "../utils/funcFs.js"


export const getAllAgent = async (req, res) => {
    try {
        res.send(await readJson("./DB/agents.json"))
    } catch (error) {
        res.send(`Error: `, error)
    }
};

export const getAgentById = async (req, res) => {
    try {
        const data = await readJson("./DB/agents.json")
        const id = Number(req.params.id)
        const agentById = data.find(agent => agent.id === id)
        console.log(agentById)
        res.send(agentById)
    } catch (error) {
        res.send(`Error: `, error)
    }
};

export const creatAgent = async (req, res) => {
    try {
        const data = await readJson("./DB/agents.json")
        const newAgent = {
            id: data.length + 1,
            name: req.body.name,
            nickname: req.body.nickname,
            reportsCount: 0
        };
        data.push(newAgent)
        await write("./DB/agents.json", data)
        res.send(newAgent)
    } catch (error) {
        res.send(`Error: `, error)
    }
};

export const updatAgentById = async (req, res) => {
    try {
        const data = await readJson("./Db/agents.json")
        data.forEach(agent => {
            if (agent.id === Number(req.params.id)) {
                agent.name = req.body.name
                agent.nickname = req.body.nickname
            };
        });
        await write("./Db/agents.json", data)
        res.send(`Agent updat`)
    } catch (error) {
        res.send(`Error: `, error)

    }
};

export const deleteAgentById = async (req, res) => {
    try {
        const data = await readJson("./DB/agents.json")
        const id = Number(req.params.id)
        const newData = data.filter(agent => agent.id != id)
        await write("./DB/agents.json",newData)
        res.send(`Agent delete`)
    } catch (error) {
        res.send(`Error: `, error)

    }
};
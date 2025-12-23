import fs, { readFile } from "fs/promises"

// אפשר לסדר את הניתוב שישלח כשקוראים לפונקציה ולא לכתוב פונקציה כזו לכל דאטה

export async function readJson(path) {
    try {
        const read = await readFile(path, "utf-8")
        const data = JSON.parse(read)
        return data
    } catch (error) {
        return `Error: ${error}`
    }
};
export async function write(path, data) {
    try {
        await fs.writeFile(path, JSON.stringify(data), "utf-8")
    } catch (error) {
        return `Error: ${error}`
    }
};
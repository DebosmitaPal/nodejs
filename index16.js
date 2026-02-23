import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const app = express()
app.use(express.json())

app.listen(8080, () => {
    console.log("Server is running at http://localhost:8080")
})

const users = []
const SECRET = "lpu"

app.post("/signup", async (req, res) => {
    const body = req.body
    const hashPassword = await bcrypt.hash(body.password, 10)
    body.password = hashPassword
    users.push(body)
    res.json({ message: "User registered successfully" })
})
app.post("/login", async (req, res) => {
    const { email, password } = req.body
    const found = users.find((user) => user.email === email)

    if (!found) {
        return res.status(401).json({ message: "User not found" })
    }

    const chkPassword = await bcrypt.compare(password, found.password)

    if (!chkPassword) {
        return res.status(401).json({ message: "Invalid password" })
    }
    const token = jwt.sign({ email: found.email }, SECRET, { expiresIn: "1h" })

    res.status(200).json({ message: "Login successful", token })
})

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: "Token required" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, SECRET)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({ message: "Invalid token" })
    }
}

app.get("/", authMiddleware, (req, res) => {
    res.send("Hello world")
})

app.get("/users", (req, res) => {
    res.json(users)
})
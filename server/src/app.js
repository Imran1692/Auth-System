import express from "express";



const app = express()

app.use(express.json())

//routes import;
import authRoutes from "./routes/auth.routes.js"

app.use("/api/v2/auth", authRoutes)

export default app
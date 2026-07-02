import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"

let mongoServer;

const connectDb = async () => {
    try {
        // Try connecting to the configured URL
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 5000 // Timeout quickly on resolution failure
        })
        console.log("db connected")
    } catch (error) {
        console.error("db connection error:", error.message || error)
        console.log("Falling back to local in-memory MongoDB server...")
        try {
            mongoServer = await MongoMemoryServer.create()
            const mongoUri = mongoServer.getUri()
            await mongoose.connect(mongoUri)
            console.log("db connected (using local in-memory MongoDB)")
        } catch (fallbackError) {
            console.error("Failed to start in-memory MongoDB fallback:", fallbackError)
        }
    }
}

export default connectDb
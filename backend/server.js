require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB Atlas");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
}

connectDB();

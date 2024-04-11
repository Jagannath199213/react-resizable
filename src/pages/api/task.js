import connectDB from "@/lib/connectDB"

export default async function handler(req, res) {
    try {
        await connectDB();
        
    } catch (err) {
        res.status(500).json({ error: 'Internal Server error' })
    }
    
}
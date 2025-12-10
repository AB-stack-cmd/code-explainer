import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const History = [];
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false
}));

// Gemini Client - add validation
if (!process.env.GEMINI_API_KEY) {
    console.error("ERROR: GEMINI_API_KEY is missing in .env file");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash" // Changed to more reliable model
});

// -------------- API ROUTE ----------------
// Post method -  user sends data to server
app.post("/api/explain-code", async (req, res) => {
    // REMOVED: res.send("working") - THIS WAS CAUSING THE ERROR

    try {
        const { code, language } = req.body;

        if (!code) {
            return res.status(400).json({
                success: false,
                error: "Code is required"
            });
        }

        const prompt = `
You are a senior software engineer.

Explain the following ${language || 'code'} in **simple and clear** language.

Include:
- Step-by-step explanation
- Important concepts
- Beginner-friendly examples
- Suggest improvements if possible

Code:
${code}
`;

        const result = await model.generateContent(prompt);
        const explanation = result.response.text();

        console.log(explanation); // Log on server side
        // const item = { code, language, prestate, time: Date.now() }
        // History.push(item)

        return res.status(200).json({
            prompt,
            success: true,
            data: explanation,
            message: "successfull"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: "Something went wrong. Try again!"
        });
    }
});
// Option 2: Add GET endpoint for testing
app.get("/api/explain-code", (req, res) => {
    res.status(200).json({
        success: true,
        message: "This endpoint requires POST method. Please send code in request body.",
        example: {
            method: "POST",
            url: "/api/explain-code",
            body: {
                code: "function add(a, b) { return a + b; }",
                language: "JavaScript"
            }
        }


    });
});

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        message: "Code Explainer API",
        endpoints: {
            explain: {
                method: "POST",
                url: "/api/explain-code",
                description: "Get explanation for code"
            },
            test: {
                method: "GET",
                url: "/api/explain-code",
                description: "Test endpoint"
            }
        }
    });
});

// ----------------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}...`);
});
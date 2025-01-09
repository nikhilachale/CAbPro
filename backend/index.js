require('dotenv').config()
const express = require("express");
const { review } = require("./types");
const { Review } = require("./db");
const cors=require("cors");
const { get } = require('mongoose');
const app = express();
const port = process.env.PORT || 2000;
app.use(cors({
    origin: "https://www.thecabbro.com/",
    methods: ["GET", "POST"],
    credentials: true
}));


app.use(express.json());
// for testing only 
app.get("/",(req, res) => {
    res.send("Hello World");
});

app.post("/rev", async (req, res) => {
    const createpayload = req.body;
    const parsepayload = review.safeParse(createpayload);
    
    if (!parsepayload.success) { 
        console.log(parsepayload.error.errors); 
        return res.status(411).json({
            msg: "You entered the wrong inputs",
            errors: parsepayload.error.errors
        });
    }

    try {
        // Use title instead of name to match schema
        await Review.create({
            title: createpayload.name,
            description: createpayload.description,
            star: createpayload.star
        });

        res.json({
            msg: "Review created"
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        });
    }
});

// GET - Fetch Reviews
app.get("/rev", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);

    } catch (error) {
        res.status(500).json({
            msg: "Failed to fetch reviews",
            error: error.message
        });
    }
});


app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
});

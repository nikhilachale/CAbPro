require("dotenv").config();
const express = require("express");
const { review } = require("./types"); // Zod schema for validation
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 2000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://www.thecabbro.com"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// POST - Create Review
app.post("/rev", async (req, res) => {
  const createpayload = req.body;
  const parsepayload = review.safeParse(createpayload);

  if (!parsepayload.success) {
    console.log(parsepayload.error.errors);
    return res.status(400).json({
      msg: "Invalid inputs",
      errors: parsepayload.error.errors,
    });
  }

  try {
    await prisma.review.create({
      data: {
        name: createpayload.name,
        description: createpayload.description,
        star: createpayload.star,
      },
    });

    res.status(201).json({ msg: "Review created successfully" });
  } catch (error) {
    console.error("❌ Error creating review:", error);
    res.status(500).json({
      msg: "Internal server error",
      error: error.message,
    });
  }
});

// GET - Fetch Reviews
app.get("/rev", async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: "desc" }, // latest first
    });
    res.status(200).json(reviews);
  } catch (error) {
    console.error("❌ Error fetching reviews:", error);
    res.status(500).json({
      msg: "Failed to fetch reviews",
      error: error.message,
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
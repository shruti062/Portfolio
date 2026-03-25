const express = require("express");
const path = require("path");
const songsRouter = require("./routes/songs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/songs", songsRouter);

// Root route
app.get("/", (req, res) => {
    res.send("Music App Backend is Running!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

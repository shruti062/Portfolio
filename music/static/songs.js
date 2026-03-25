const express = require("express");
const router = express.Router();

// Mock data for songs
const songs = [
    {
        id: 1,
        title: "Baadal",
        artist: "Vishal Dadlani, Shekhar Ravjiani",
        file: "/songs/bollywood_Akira-Baadal.mp3",
        image: "/images/song1.jpg",
    },
    {
        id: 2,
        title: "Aadatein Jaisi Hai Tu Meri",
        artist: "Javed Ali",
        file: "/songs/Aadatein.mp3",
        image: "/images/song2.jpg",
    },
];

// Get all songs
router.get("/", (req, res) => {
    res.json(songs);
});

// Get a specific song by ID
router.get("/:id", (req, res) => {
    const song = songs.find((s) => s.id === parseInt(req.params.id));
    if (!song) {
        return res.status(404).json({ message: "Song not found" });
    }
    res.json(song);
});

module.exports = router;

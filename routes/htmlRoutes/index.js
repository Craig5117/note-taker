const path = require("path");
const router = require("express").Router();

// refers to notes.html page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// refers root to index.html and anything else that is not a defined route
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});



module.exports = router;

const router = require("express").Router();
const path = require("path");

//defines the route should return 'notes.html' file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});
//defines the route should return 'index.html' file  
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
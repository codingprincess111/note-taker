const router = require('express').Router();
const path = require('path');

//defines the route that sends 'index.html' as a response to client
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});
//defines the route that sends   
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;
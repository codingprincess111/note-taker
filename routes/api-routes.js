const router = require('express').Router;
const fs = require("fs");
const {
    v4 : uuidv4
    } = require('uuid');


    
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"))
    res.json(dbJson);
});



router.post('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"))
    const newNote = req.body;
    newNote.id = uuidv4();
    dbJson.notes.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
    });

    router.delete('/api/notes/:id', async (req, res) => {
        const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"))
        const id = req.params.id;
        dbJson.notes = dbJson.notes.filter(note => note.id!== id);
        fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
        res.json(dbJson);
        });
const router = require("express").Router();
const DbFunction = require("../db/dbfunctions");

const dbF = new DbFunction();

//GET `/api/notes` - should read db.json file and return all saves notes as json
router.get("/notes", async (req, res) => {
    try{
       const notes = await dbF.getNotes();
       res.json(notes);
    } catch (err){
      throw err;
    }
    // const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    // res.json(dbJson);
});


//POST `/api/post` should receive new note and return new note to user
router.post("/notes", async (req, res) => {
    try{
        const newNote = req.body;
        await dbF.addNote(newNote);
        res.json(newNote);
    }   catch (err) {
        throw err;
    }
   
});

//DELETE `/api/notes/:id` should delete note from all notes
router.delete("/notes/:id", (req, res) => {
    res.json(dbF.deleteNote(req.params.id));
});
        // const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"))
        // const id = req.params.id;
        // dbJson.notes = dbJson.notes.filter(note => note.id!== id);
        // fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
        // res.json(dbJson);


module.exports = router;
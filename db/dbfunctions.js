const util = require("util");
//const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
//const fs = require("fs/promises");
const fs = require("fs/promises"); // add require statement to import fs

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);



class DbFunctions {
    async getNotes() {
        try {
            const notes = await fs.readFile("db/db.json", "utf8"); // change readFileSync to readFile
            return JSON.parse(notes);
        }   catch (err) {
            throw err;
        }
    }

    async writeNotes(notes) {
        try {
        const updateNotes = await fs.writeFile( // change writeFileAsync to writeFile
            "db/db.json",
            JSON.stringify(notes)
        );
        return updateNotes;
        } catch (err) { 
            throw new Error ("notes not added");
        }
    }

    async addNote(note) {
        try {
            const notes = await this.getNotes();
            const newNote = {
               ...note,
                id: uuidv4(),
            };
            notes.push(newNote);
            await this.writeNotes(notes);
            return newNote;
        } catch (err) {
            throw err;
        }
    } 

    async deleteNote(id) {
        try {
            const notes = await this.getNotes();
            const newNotes = notes.filter((note) => note.id!== id);
            await this.writeNotes(newNotes);
            return newNotes; 
        } catch (err) {
            throw err;
        }   
    } 
}
module.exports = DbFunctions;
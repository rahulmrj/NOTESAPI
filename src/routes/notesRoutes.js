const express = require("express");
const { getNotes, creatNote, deleteNote, updateNote } = require("../controllers/noteControllers");
const auth = require("../middlewares/auth");
const notesRouter = express.Router();

notesRouter.post("/", auth, creatNote);

notesRouter.get("/",auth, getNotes);

notesRouter.delete("/:id", auth, deleteNote);

notesRouter.put("/:id", auth, updateNote);

module.exports = notesRouter;

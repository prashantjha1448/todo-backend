const express = require('express')
const router = express.Router()
const { getNotes, createNote, updateNote, getSingleNote, deleteNote } = require('../auths/notesAuth')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/getallNotes',authMiddleware, getNotes)
router.get('/singleNotes/:id', authMiddleware, getSingleNote)
router.post('/createNotes', authMiddleware, createNote)
router.put('/update/:id', authMiddleware, updateNote)
router.delete('/deleted/:id',  authMiddleware, deleteNote)

module.exports = router

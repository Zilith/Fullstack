const notesRouter = require('express').Router()
const Note = require('../models/note')

// get all notes
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes)
})

// get a single note
notesRouter.get('/:id', async (request, response, next) => {
  const note = await Note.findById(request.params.id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

// create a new note
notesRouter.post('/', async (request, response, next) => {
  const body = request.body

  const note = new Note({
    content: body.content,
    important: Boolean(body.important) || false,
  })
  const savedNote = await note.save()
  response.status(201).json(savedNote)
})

// update a note
notesRouter.put('/:id', (req, res, next) => {
  const { content, important } = req.body

  Note.findByIdAndUpdate(
    req.params.id,
    { content, important },
    { new: true, runValidators: true, context: 'query' }
  )
    .then((updatedNote) => {
      if (updatedNote) {
        res.json(updatedNote)
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => next(error))
})

// delete a note
notesRouter.delete('/:id', async (request, response) => {
  await Note.findByIdAndDelete(request.params.id)

  response.status(204).send()
})

module.exports = notesRouter

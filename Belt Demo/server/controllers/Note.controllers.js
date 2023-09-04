const Note = require("../models/Note.models")





//!-------CRUD

// READ ALL
module.exports.findALLNote = (req, res) => {
    Note.find()
        .then(allNote => {
            res.json(allNote)
        })
        .catch(err => res.json(err))
}

// CREATE

module.exports.makeNote = (req, res) => {
    Note.create(req.body)
        .then(newNote => {
            res.status(200).json(newNote)
        })
        .catch(err => res.status(400).json(err))
}


// Find One

module.exports.findOneNote = (req, res) => {

    Note.findById(req.params.id)
        .then(oneNote => res.status(200).json(oneNote)
        ).catch(err => { res.status(400).json(err) })
}

// Update
module.exports.updateOneNote = (req, res) => {
    Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNote => { res.json(updatedNote) })
        .catch(err => { res.json(err) })
}
// Delete

module.exports.deleteNote = (req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(result => { res.json(result) })
        .catch(err => { res.json(err) })


}
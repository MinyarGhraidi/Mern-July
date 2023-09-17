

const authors= require("../models/authors.models")




//!-------CRUD

// READ ALL
module.exports.findALLAuthors = (req, res) => {
    authors.find()
        .then(allAuthors => {
            res.json(allAuthors)
        })
        .catch(err => res.json(err))
}

// CREATE

module.exports.makeAuthors = (req, res) => {
    authors.create(req.body)
        .then(newAuthors => {
            res.status(200).json(newAuthors)
        })
        .catch(err => res.status(400).json(err))
}


// Find One

module.exports.findOneAuthors = (req, res) => {

    authors.findById(req.params.id)
        .then(oneAuthors=> res.status(200).json(oneAuthors)
        ).catch(err => { res.status(400).json(err) })
}

// Update
module.exports.updateOneAuthors = (req, res) => {
    authors.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthors => { res.json(updatedAuthors) })
        .catch(err => { res.json(err) })
}
// Delete

module.exports.deleteAuthors = (req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(result => { res.json(result) })
        .catch(err => { res.json(err) })


}
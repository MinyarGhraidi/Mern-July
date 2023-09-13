

const voting = require("../models/voting.models")







//!-------CRUD

// READ ALL
module.exports.findALLVoting = (req, res) => {
    voting.find()
        .then(allVoting => {
            res.json(allVoting)
        })
        .catch(err => res.json(err))
}

// CREATE

module.exports.makeVoting= (req, res) => {
    voting.create(req.body)
        .then(newVoting => {
            res.status(200).json(newVoting)
        })
        .catch(err => res.status(400).json(err))
}


// Find One

module.exports.findOneVoting = (req, res) => {

    voting.findById(req.params.id)
        .then(oneVoting => res.status(200).json(oneVoting)
        ).catch(err => { res.status(400).json(err) })
}

// Update
module.exports.updateOneVoting = (req, res) => {
    voting.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedVoting=> { res.json(updatedVoting) })
        .catch(err => { res.json(err) })
}
// Delete

module.exports.deleteVoting = (req, res) => {
    voting.findByIdAndDelete(req.params.id)
        .then(result => { res.json(result) })
        .catch(err => { res.json(err) })


}
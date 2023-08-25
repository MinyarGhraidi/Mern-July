const Joke = require('../models/jokes.models');


module.exports.findAllJokes =(req,res)=>{
    Jokes.find()
    .then(allJoke =>{
      console.log(allJoke)
      res.json({allJoke})

    })
    .catch(err => { res.json({message: "Wait a minute😊"})})
}

// find one


module.exports.findOne = (req,res) =>{
Jokes.findOne({_id:req.params.id}).then(Jokes=>{
    console.log("This joke", Jokes)
    res.json(Jokes)
}).catch(err=>{
    console.log(err)
    res.json({error:err})
})
}

module.exports.createJoke = (req,res) =>{
Jokes.create(req.body).then(newJokes=>{
    console.log("New joke", newJokes)
    res.json(newJokes)
}).catch(err=>{
    console.log(err)
    res.json({error:err})
})
}


module.exports.updateJoke = (req,res) =>{
Jokes.findByIdAndUpdate(
    {_id:req.params.id}, req.body ,{new:true, runValidators:true}
).
then(newJokes=>{
    console.log("New joke", newJokes)
    res.json(newJokes)
}).catch(err=>{
    console.log(err)
    res.json({error:err})
})
}


module.exports.deleteJokes = (req,res) =>{
Jokes.deleteOne(
    {_id:req.params.id}
).
then(result=>{
    console.log("DELETE RESULT == ", result)
    res.json(result)
}).catch(err=>{
    console.log(err)
    res.json({error:err})
})
}


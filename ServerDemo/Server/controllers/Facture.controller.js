const {Facture} = require("../models/Facture.model")


// find allFacture

module.exports.findAllFacture =(req,res)=>{
      Facture.find()
      .then(allFacture =>{
        console.log(allFacture)
        res.json({allFacture})

      })
      .catch(err => { res.json({message: "Wait a minute😊"})})
}

// find one


module.exports.findOne = (req,res) =>{
  Facture.findOne({_id:req.params.id}).then(facture=>{
      console.log("This Facture", facture)
      res.json(facture)
  }).catch(err=>{
      console.log(err)
      res.json({error:err})
  })
}

// create one Facture

module.exports.createFacture = (req,res) =>{
Facture.create(req.body).then(newFacture=>{
      console.log("New facture", newFacture)
      res.json(newFacture)
  }).catch(err=>{
      console.log(err)
      res.json({error:err})
  })
}


module.exports.updateFacture = (req,res) =>{
Facture.findByIdAndUpdate(
      {_id:req.params.id}, req.body ,{new:true, runValidators:true}
  ).
  then(newFacture=>{
      console.log("New facture", newFacture)
      res.json(newFacture)
  }).catch(err=>{
      console.log(err)
      res.json({error:err})
  })
}


module.exports.deleteFacture = (req,res) =>{
Facture.deleteOne(
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


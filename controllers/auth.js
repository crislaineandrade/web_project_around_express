const User = require('../models/user')

module.exports.registerUser = (req, res) => {
  const {email, password} = req.body
  console.log(email)
  User.create({email, password})
  .then((user) => {
    return res.send({data: user})

  })
  .catch((err) => {
    return res.status(500).send({message: 'Erro'})
  })
}

// module.exports.authorizeUser = (req,res) => {

// }
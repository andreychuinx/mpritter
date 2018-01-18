const express = require('express')
const router = express.Router()
const userModel = require('../models/user')
const HttpStatus = require('http-status-codes')
const jwt = require('jsonwebtoken')

class PostController {
  static update(req, res) {
    console.log(req.body.name)
    userModel.findByIdAndUpdate(req.decoded.userId, {
      name : req.body.name,
      email: req.body.email
    },{new : true})
    
      .then(result => {
        res.status(HttpStatus.OK).json({
          messages: 'Data User',
          data: result
        })
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          messages: 'Data User Error Server',
          data: err,
          error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
        })
      })
  }

  
}

module.exports = PostController

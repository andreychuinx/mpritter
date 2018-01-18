const express = require('express');
const router = express.Router();
const PostModel = require('../models/post')

class PostController {
  static get(req, res){
    PostModel.find()
    .populate('userId')
    .exec()
    .then(result => {
      res.status(HttpStatus.OK).json({
        messages: "Data Post",
        data: result
      })
    })
    .catch(err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        messages: "Data Post Error Server",
        data: err,
        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
      })
    })
  }

  static getSingle(req, res) {
    PostModel.findById(req.params.id)
    .populate('userId')
    .exec()
    .then(result => {
      res.status(HttpStatus.OK).json({
        messages: "Data Post",
        data: result
      })
    })
    .catch(err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        messages: "Data Post Error Server",
        data: err,
        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
      })
    })
  }

  static create(req, res) {
    let objPost = {
      post: req.body.post,
      userId: req.decoded.userId
    }
    let dataPost = new PostModel(objPost)
    dataPost.save()
      .then(result => {
        res.status(HttpStatus.OK).json({
          messages: "Posts Created",
          data: result
        })
      })
      .catch(err => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
          messages: "Data Posts Error Server",
          data: err,
          error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
        })
      })
  }

  static delete(req, res){
    PostModel.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(HttpStatus.OK).json({
        messages: "Posts Deleted",
        data: result
      })
    })
    .catch(err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        messages: "Data Posts Error Server",
        data: err,
        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
      })
    })
  }

}

module.exports = PostController
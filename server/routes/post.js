const express = require('express');
const router = express.Router();
const Post = require('../controllers/post')

router.get('/', Post.get)
router.get('/:id', Post.getSingle)
router.post('/', Post.create)
router.delete('/', Post.delete)


module.exports = router
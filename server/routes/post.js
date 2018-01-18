const express = require('express');
const router = express.Router();
const Post = require('../controllers/post')
const authentification = require('../middlewares/authentification')

router.get('/', Post.get)
router.get('/:id', Post.getSingle)
router.post('/', authentification, Post.create)
router.delete('/:id', authentification, Post.delete)
router.get('/tags/:tag', authentification, Post.tags)
router.get('/user/postuser', authentification, Post.userPosts)


module.exports = router
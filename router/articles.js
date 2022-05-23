const express = require('express')

const router = express.Router()
const articlesCtrl = require('../controller/articles')

// List Articles  Returns most recent articles globally by default, provide tag, author or favorited query parameter to filter results
// Query Parameters:
router.get('/', articlesCtrl.getList)
// Feed Articles
// Can also take limit and offset query parameters like List Articles
// Authentication required, will return multiple articles created by followed users, ordered by most recent first.
router.get('/feed', articlesCtrl.getFeed)

// Get Article No authentication required, will return single article
router.get('/:slug', articlesCtrl.getSlug)

// Create Article Authentication required, will return an Article
router.post('/', articlesCtrl.setArticle)

// Update Article
router.put('/:slug', articlesCtrl.updateArticle)

// Delete Article
router.delete('/:slug', articlesCtrl.deleteArticle)

// Add Comments to an Article
router.post('/:slug/comments', articlesCtrl.addComments)

// Get Comments from an Article
router.get('/:slug/comments', articlesCtrl.getComments)

// Delete Comment
router.delete('/:slug/comments/:id', articlesCtrl.deleteComments)

// Favorite Article
router.post('/:slug/favorite', articlesCtrl.setFavorite)

// Unfavorite Article
router.delete('/:slug/favorite', articlesCtrl.setUnFavorite)

module.exports = router
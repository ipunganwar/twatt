const express = require('express');
const router = express.Router();
const TwattController = require('../controllers/users')

/* GET users listing. */
router.get('/timeline',TwattController.getTimeline)
router.get('/find',TwattController.findTweet)
router.post('/posted',TwattController.postTweet)

module.exports = router;

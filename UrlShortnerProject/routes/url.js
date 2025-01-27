const express = require('express');
const {handleGenerateShortUrl,getByUrl, handleGetAnalytcs } =require('../controller/url')
const router = express.Router();


router.post('/',handleGenerateShortUrl);
router.get('/:shortId',getByUrl);
router.get('/analytics/:shortId',handleGetAnalytcs);

module.exports = router;
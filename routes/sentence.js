const englishWordsData = require("../data/englishWords")
const express = require('express');
const router = express.Router();
const binarySearch = require("../utils/binarySearch")


router.get('/check', async function(req, res, next) {
  if ( !req.query || !req.query.sentence){
    return res.status(500).send("Empty query string")
  }
  console.log(req.query.sentence)
  const sentence = req.query.sentence
  const wordsList = sentence.split(" ")
  console.log(wordsList)

  const englishWords = await englishWordsData.get()
  const validWords = wordsList.filter(word => {
    return binarySearch(englishWords, word.toLowerCase()) === false
  })
  
  res.send(validWords);
});

module.exports = router;

const oauth = require('../helpers/oauth')

const getTimeline = (req, res) =>{
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      '382156493-TkS1PbW74Vo5Cxq4EKxsc8oMYJWt0cVWidOffn2N', //test user token 
      '2sYjEXhVKC3lmjqP8O2KOpQABDUpG2XpfCkkaNkpKY68I', //test user secret           
      function (err, data, response){
        if(err){
          res.status(404).send({msg : "error", error : err})
        }
        res.status(200).send(data)   
      });    
}

const findTweet = (req, res)=> {
  // res.send(req.query)
  console.log(req.body)
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=%40${req.body.search}`,
      '382156493-TkS1PbW74Vo5Cxq4EKxsc8oMYJWt0cVWidOffn2N', //test user token 
      '2sYjEXhVKC3lmjqP8O2KOpQABDUpG2XpfCkkaNkpKY68I', //test user secret           
      function (err, data, response){
        if(err){
          res.status(404).send({msg : "error", error : err})
        }
        res.status(200).send(data)   
      });    
} 

const postTweet = (req, res) => {
  oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json`,
      '382156493-TkS1PbW74Vo5Cxq4EKxsc8oMYJWt0cVWidOffn2N', //test user token 
      '2sYjEXhVKC3lmjqP8O2KOpQABDUpG2XpfCkkaNkpKY68I',
      {"status": req.body.status},  
      function (err, data, response){
        if(err){
          res.status(404).send({msg : "error", error : err})
        }
        res.status(200).send(data)   
      });  
}

module.exports = {
  getTimeline,
  findTweet,
  postTweet
}
    
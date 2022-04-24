require('dotenv').config();
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcrypt');
const Members = require("../public/database/member.js");

router.get('/login', authenticationToken, (req,res) => {
   Members.findOne({email: req.userEmail}, (err,user) => {
      if (err){
        console.log(err)
    }
    else{
        console.log("Result : ", user); 
        res.json({user});
    }
   });
});
// authentication login
router.post('/login', async (req,res) => {
    const body = req.body;
    const user = await Members.findOne({ email: body.email });
    const userEmail = req.body.email;
    if (user) {
      // check user password with hashed password stored in the database
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
          if(req.cookies.access_token){
            res.json({message: "Sorry, you cannot sign in again"})}
          else{
            const accessToken = jwt.sign(userEmail, process.env.ACCESS_TOKEN_SECRET);
            res
            .cookie("access_token", accessToken, {
              httpOnly:true,
              secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({ 
              message: "login successfully 😊 👌",
              accessToken : accessToken,
            });
          }
      }
      else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User does not exist" });
    }
   })

// authentication register
   router.post('/register',  authenticationToken, (req, res) => {
    const token = req.cookies.access_token;
    if(token){
      res
      .status(401)
      .json({message: "you cannot register a user. you have to log out first"})
    }else{
    const newMember = new Members({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: bcrypt.hashSync(req.body.password,10)
    });
    newMember.save(err => {
        if(err){
            return res.status(400).json({
                title:  'error',
                error: 'email in use'
            })
        }
        return res.status(200).json({
                title: 'register success'
        })
    })
  }
 });
//authentication member
function authenticationToken(req, res, next) {
  const token = req.cookies.access_token;
  if(token == null){
    return res
    .sendStatus(401)
    .json({message: "you cannot get  a user information."})
  }
  else{
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.userEmail = user;
      next()
    })
  }
}
////////////////////////////////////////
 router.get('/logout',authenticationToken,(req,res) => {
  return res
  .clearCookie("access_token")
  .status(200)
  .json({ message: "Successfully logged out 😏 🍀" });
 });
module.exports = router;

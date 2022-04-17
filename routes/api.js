const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const member = require('../public/member');
//authentication member
router.post('/login', (req,res) => {
       const found = member.some(members => members.username ===  req.body.username && 
        members.password ===  req.body.password);
       if(found){
           res.json(member.filter(members => members.username ===  req.body.username && 
            members.password ===  req.body.password))
       }else  return res.status(400).json({msg: 'Please fill the correct informations'});
});

router.get('/',(req, res) => {
        res.json(member);
});

//create member
router.post('/register', (req, res) => {
   const newMember = {
       username: req.body.username,
       email: req.body.email,
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       password: req.body.password
   };
   if(!newMember.lastname || !newMember.email || !newMember.username || 
    !newMember.firstname || !newMember.password ){
       return res.status(400).json({msg: 'Please fill all informations'});
   }
   member.push(newMember);
   res.json(member);
});
module.exports = router;

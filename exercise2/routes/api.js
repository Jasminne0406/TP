const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const bodyParser = require("body-parser");
const member = require('../public/member');

//authentication member
router.post('/login', (req,res)=>{
    const found = member.some(member=>member.email === req.body.email 
        && member.password === req.body.password);
    if(found){
        res.json(member.filter(member => member.email === req.body.email
            && member.password === req.body.password));
        res.console("login success!");
    }else {
        res.status(400).json({ msg:'you cannot login'});
    }
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

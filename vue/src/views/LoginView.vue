<template>
    <div class="leftBox">
        <div id="text1"><b><h2>Welcome</h2></b></div>
        <img  id="image1" alt="Vue logo" src="../assets/logo.png">
        <div id="text5"><p>Authentication App-</p></div>
        <router-link to="/Login"><p id="buttonLogin1">Login</p></router-link>
        <router-link to="/Register"><p id="buttonRegister">|   Register</p></router-link>
        <div class="registerBox">
            <center><img id="image2" alt="Vue logo" src="../assets/person.jpg"></center>
            <h4 id="textName">Email or Username</h4>
            <input type="text" id="inputName" placeholder="Enter username" v-model="email">
            <h4 id="textPassword" >Password</h4>
            <input type="password" v-model="password" id="inputPassword" placeholder="Enter Password" >
            <button @click="login" id="buttonLogin2" >Login</button>
            <div id="buttomBox"></div>
        </div> 
        </div> 
</template>
<script>
import axios from 'axios';

export default {
  name: 'loginPage',
  data() {
      return {
       email : '',
       password : ''
     };
   },
  methods:{
  login(){
       if(document.cookie){
         console.log("You have to logout first");
       }else {
       let url = 'http://localhost:3000/login';
       let data = {
         email: this.email,
         password: this.password
       }
       let config = {
         headers: {
          'Content-Type': 'application/json;charset=UTF-8',
         },
         withCredential: true,
       }
       axios.post(url, data,config)
        .then((res)=>{
           document.cookie = "token = " +res.data.token + "; expires=Mon, 2 May 2022 12:00:00 UTC";
           console.log("Response:",res);
           this.$router.push('/me');
          })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
          })
        }
      }
   }
}
</script>
<style>
.leftBox{
    width: 700px;
    height: 400px;
    margin-left:  auto;
    margin-right: auto;
    margin-top: 100px;
    position: relative;
}
#image1{
    height: 100px;
    left: 17px;
    top: 70px;
    position: absolute;
}
#text1{
      position: absolute; 
      left: 160px; 
      top: 70px;
    }
#text5{
      position: absolute; 
      left: 140px; 
      top: 120px;
}
#buttonRegister {
      position: absolute;
      left: 65px;
      top: 170px;
      color: #42b983;
}

#buttonLogin1{
      position: absolute;
      left: 20px;
      top: 170px;
      color:black;
}
.registerBox{
     position: absolute;
     left: 370px;
     height: 80%;
     width: 47%;
     border: 2px solid rgb(194, 187, 187,0.5);
}
#image2{
  width: 30%;
  height: 30%;
}
#textName{
  position: absolute;
  left:6%;
}
#textPassword{
  position: absolute;
  left:6%;
  top: 52%;
}
#inputName{
  width: 86%;
  position: absolute;
  margin:20px;
  left:0%;
  top: 40%;
}
#inputPassword{
  width: 86%;
  position: absolute;
  margin:20px;
  left:0%;
  top: 59%;
}
#buttonLogin2{
  width: 86%;
  position: absolute;
  top: 80%;
  left:7%;
  background-color:#42b983;
  border-radius:5px;
  }
#buttomBox{
  position: absolute;
  width: 100%;
  background-color:rgba(84, 76, 76, 0.181);
  bottom:0px;
  border-top:1px solid rgba(126, 123, 123, 0.195);
  height:20px;
}
</style>

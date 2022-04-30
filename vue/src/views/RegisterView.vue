<template>
    <div class="leftBox2">
        <div id="text2"><b><h2>Welcome</h2></b></div>
        <img  id="image4" alt="Vue logo" src="../assets/logo.png">
        <div id="text3"><p>Authentication App-</p></div>
        <router-link to="/Login"><p id="Login2">Login</p></router-link>
        <router-link to="/Register"><p id="Register2">|   Register</p></router-link>
        <div class="registerBox2">
            <h3>Sign Up</h3>
            <p>Please fill this form to create an account</p>
            <p style="font-size:14px" id="text4">Email</p>
            <input id="inputbox2" placeholder="  Enter Email" type="email" v-model="email1">
            <p style="font-size:14px" id="text4">Username</p>
            <input id="inputbox2" placeholder="  Enter Username" type="text" v-model="username1">
            <p style="font-size:14px" id="text4">First name</p>
            <input id="inputbox2" placeholder="  Enter First name" type="text" v-model="firstname1">
            <p style="font-size:14px" id="text4">Last name</p>
            <input id="inputbox2" placeholder="  Enter Last name" type="text" v-model="lastname1">
            <p style="font-size:14px" id="text4">Password</p>
            <input id="inputbox2" placeholder="  Create your password" type="password" v-model="password1">
            <p style="font-size:14px">By creating an account you have to agree to our</p>
            <p style="font-size:14px; color:#42b983; margin-top:-2px; padding-bottom:10px ">Terms & Privacy</p>
            <button @click="register">Register</button>
            <div id="buttomBox2"></div>
        </div> 
        </div> 
</template>
<script>
import axios from 'axios';
export default {
  name: 'registerPage',
  data(){
    return{
      email1:'',
      username1:'',
      firstname1:'',
      lastname1:'',
      password1:''
    }
  },
  methods: {
    register(){
      let Newmember = {
          email: this.email1,
          username: this.username1,
          firstname: this.firstname1,
          lastname:this.lastname1,
          password:this.password1
      }
      axios.post('http://localhost:3000/register',Newmember)
        .then(res => {
           console.log(res);
        }, err => {
          console.log(err.res);
        })
    }
  }
}
</script>

<style>
.leftBox2{
    width: 700px;
    height: 400px;
    margin-left:  auto;
    margin-right: auto;
    margin-top: 100px;
    position: relative;
}
#image4{
    height: 100px;
    left: 17px;
    width:100px;
    top: 70px;
    position: absolute;
}
input {
    width:87%;
    height:30px;
    margin-bottom: 10px;
    border:none;
    background: gainsboro;
}
p{
    margin-bottom:5px;
}
button{
    width:87%;
    background-color:#42b983;
    border: none;
    height:25px;
}
#text2{
      position: absolute; 
      left: 160px; 
      top: 70px;
    }
#text3{
      position: absolute; 
      left: 140px; 
      top: 120px;
}
#Register2 {
      position: absolute;
      left: 65px;
      top: 170px;
      color:black;
}

#Login2{
      position: absolute;
      left: 20px;
      top: 170px;
      color: #42b983;
}
.registerBox2{
     position: absolute;
     left: 370px;
     height: 600px;
     width: 47%;
     border: 2px solid rgb(194, 187, 187,0.5);
}
#text4{
    text-align:left;
    margin-left:20px;
}
#image3{
  width: 30%;
  height: 30%;
}

#inputName2{
  width: 86%;
  position: absolute;
  margin:20px;
  left:0%;
  top: 40%;
}
#inputPassword2{
  width: 86%;
  position: absolute;
  margin:20px;
  left:0%;
  top: 59%;
}
#buttonLogin3{
  width: 86%;
  position: absolute;
  top: 80%;
  left:7%;
  background-color:#42b983;
  border-radius:5px;
  }
#buttomBox2{
  position: absolute;
  width: 100%;
  background-color:rgba(84, 76, 76, 0.181);
  bottom:0px;
  border-top:1px solid rgba(126, 123, 123, 0.195);
  height:20px;
}
</style>

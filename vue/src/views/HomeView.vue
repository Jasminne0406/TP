<template>
 <div class="leftBox3">
        <div id="text1"><b><h2>Welcome</h2></b></div>
        <img  id="image1" alt="Vue logo" src="../assets/logo.png">
        <div id="text5"><p>Authentication App-</p></div>
        <router-link to="/Login"><p id="buttonLogin1">Login</p></router-link>
        <router-link to="/Register"><p id="buttonRegister">|   Register</p></router-link>
        <div class="welcomeBox">
            <p>Congratulation , you had successfully login! </p>
            <button @click="logout" id="logout">Log out</button>
            <img id="image"  src="../assets/welcome.webp">
        </div> 
        </div>
</template>
<script>
import axios from 'axios'; 

export default{
    name:"logoutPage",
    methods: {
        async logout(){
            let url = 'http://localhost:3000/logout';
            await axios.get(url).then((res)=>{
                document.cookie = "token = ; expires=Thu, 01 Jan 1970 00:00:00 GTM";
                console.log(res);
                this.$router.push('/login');
            })
        }
     },
     
}
</script>
<style>
.leftBox3{
    width: 700px;
    height: 400px;
    margin-left:  auto;
    margin-right: auto;
    margin-top: 100px;
    position: relative;
}
#logout{
  width: 30%;
  position: absolute;
  top: 20%;
  left: 37%;
  border: 2px solid green;
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
.welcomeBox{
     position: absolute;
     left: 370px;
     height: 80%;
     width: 47%;
     border: 2px solid rgb(194, 187, 187,0.5);
}

#image{
    position:absolute;
    width:80%;
    left:15%;
    top:40%;
}
</style>
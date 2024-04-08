<!-- <template>
 <div class="my-container">
<form @submit.prevent="login()">    
<div class="mb-3">
<br>
<br>
<h2>Login</h2>
<div class="error" v-if="emailNotfound" @click="clearEmailError">{{ emailNotfound }}</div>
<div class="error" v-if="allError" @click="clearError">{{ allError }}</div>
<br>
<label for="exampleFormControlInput1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required v-model="loginData.email" @input="clearEmailError" @click="clearError" >
<br>
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="loginData.password" required  @click="clearError">
<button type="submit" class="btn btn-primary btn-lg">Login</button>
</div>
</form>
</div>
</template>
<script>
import axios from "axios"

export default {
    data() {
        return {
            logedIn: false,
            loginData:{
                email:'',
                password:'',
            },
            allError:'',
            emailNotfound:'',
        }
    },
   
        methods: {
    login() {
      axios
        .post('http://localhost:9654/login', {email: this.loginData.email,
    password: this.loginData.password,})
        .then((res) => {
          localStorage.setItem('token', res.data.token)    
        console.log('Response:', res);
          if (res.status === 200) {
            this.logedIn = true;
            console.log('Login Successful'); 
          }
        })             
        .catch((error) => {
      this.handleLoginError(error);
      console.log(error);
        })
    },
    handleLoginError(error) {
    if (error.response.status === 401) {
      this.emailNotfound = error.response.data.message; 
    } else {
          this.allError = error.response.data.message;
  }
},

clearEmailError() {
    this.emailNotfound = '';
  },
  clearError() {
    this.allError = '';
  },
}
}
</script>

<style scoped>
.my-container {
  max-width: 500px; /* Set the maximum width of the container */
  margin: 0 auto; /* Center the container horizontally */
}
.error {
  color: red;
  font-size: 1.5em;
  margin-top: 5px;
}

</style> -->

<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://www.movis-logistics.com/images/logo-dark.png"
    ></v-img>

    <v-card
      class="mx-auto pa-5 pb-8"
      elevation="44"
      max-width="448"
      rounded="lg"
      style="margin-top: 50px;"

    >
    <div class="error" v-if="emailNotfound" @click="clearEmailError">{{ emailNotfound }}</div>
     <div class="error" v-if="allError" @click="clearError">{{ allError }}</div>
      <div class="text-subtitle-1 text-medium-emphasis"><h4>Account</h4></div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="loginData.email" 
      
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
      <h4>Password</h4>  

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
         <h5> Forgot login password?</h5></a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        v-model="loginData.password"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
       <h5>   Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.</h5>
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="login"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
  // export default {
  //   data: () => ({
  //     visible: false,
  //   }),
  // }

  import axios from "axios"
  import {base_url} from "../constants"

export default {
    data() {
        return {
            logedIn: false,
            loginData:{
                email:'',
                password:'',
            },
            allError:'',
            emailNotfound:'',
        }
    },
   
        methods: {
    login() {
      axios
        .post(`${base_url}/login`, {email: this.loginData.email,
    password: this.loginData.password,})
        .then((res) => {
         
        console.log('Response:', res);
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token)    
            localStorage.setItem('user', JSON.stringify(res.data.user) )  
            this.logedIn = true;

            window.location.href="/Dashboard"
            // console.log('Login Successful'); 
          }
        })             
        .catch((error) => {
      this.handleLoginError(error);
      console.log(error);
        })
    },
    handleLoginError(error) {
    if (error.response.status === 401) {
      this.emailNotfound = error.response.data.message; 
    } else {
          this.allError = error.response.data.message;
  }
},

clearEmailError() {
    this.emailNotfound = '';
  },
  clearError() {
    this.allError = '';
  },
}
}
</script>

<style scoped>

.error {
  color: red;
  font-size: 1.5em;
  margin-top: 5px;
}
</style>
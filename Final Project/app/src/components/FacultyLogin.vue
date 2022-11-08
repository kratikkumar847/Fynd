<template>
  <div class="container">
    <div class="row justify-content-center align-items-center inner-row">
      <div class="col-md-5">
        <div class="form-box p-5">
          <div class="form-title">
            <h2 class="fw-bold mb-3">Login</h2>
          </div>
          <form id="login-form" @submit.prevent="LoginUser">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control form-control-sm"
                placeholder="Email"
                v-model="email"
                id="floatingInput"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control form-control-sm"
                placeholder="Password"
                v-model="password"
                id="floatingPassword"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="mt-3">
              <button class="btn primaryBg text-white" v-if="!xhrRequest">Login</button>
              <button class="btn primaryBg text-white" v-if="xhrRequest">
                <span class="spinner-border spinner-border-sm "></span>
                wait....
              </button>
            </div>
          </form>
          <div class="mt-3">
            <span>Don't have account </span>
            <button class="p-0 border-0 bg-transparent primaryColor">
              <router-link to="/FacultySignUp">SignUp</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  name: "FacultyLogin",
  data(){
    return {
      email : '',
      password : '',
      xhrRequest : false
    }
  },
  methods: {
    LoginUser() {
      let v = this;
      v.xhrRequest = true;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        () => {
          v.xhrRequest = false
          alert("Logged in")
          this.$router.replace('FacultyProfile');
        },
        (err) =>{
          v.xhrRequest = false
          alert(`Error - ${err.message}`);
        }
      )
    }
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

body {
  font-family: "Roboto";
  background: linear-gradient(
    90deg,
    rgba(141, 194, 111, 1) 0%,
    rgba(118, 184, 82, 1) 50%
  );
}

.inner-row {
  height: 100vh;
}

.primaryBg {
  background: rgba(141, 194, 111, 1);
}

.primaryColor {
  color: rgba(141, 194, 111, 1);
}

.form-box {
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
</style>
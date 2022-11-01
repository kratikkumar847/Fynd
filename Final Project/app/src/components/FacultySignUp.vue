<template>
  <div class="container">
    <div class="row justify-content-center align-items-center inner-row">
      <div class="col-md-5">
        <div class="form-box p-5">
          <div class="form-title">
            <h2 class="fw-bold mb-3">Create Your Account</h2>
          </div>
          <form  @submit.prevent="register">
            <div class="form-floating mb-3">
              <input
                type="name"
                class="form-control form-control-sm"
                placeholder="Enter Name"
                id="floatingName"
                v-model="register_form.name"
              />
              <label for="floatingName">Enter Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control form-control-sm"
                placeholder="Enter Email"
                id="floatingEmail"
                v-model="register_form.email"
              />
              <label for="floatingEmail">Enter Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Enter College Name"
                id="floatingCollege"
                v-model="register_form.collegename"
              />
              <label for="floatingCollege">Enter College Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control form-control-sm"
                placeholder="Enter Password"
                id="floatingPassword"
                v-model="register_form.password"
              />
              <label for="floatingPassword">Enter Password</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control form-control-sm"
                placeholder="Confirm Password"
                id="floatingConfirm"
                v-model="register_form.confirmpassword"
              />
              <label for="floatingConfirm">Confirm Password</label>
            </div>
            <div class="mt-3">
              <button class="btn primaryBg text-white">Submit</button>
            </div>
          </form>
          <div class="mt-3">
            <span>Have a account </span>
            <button class="p-0 border-0 bg-transparent primaryColor">
              <router-link to="/FacultyLogin"> Login </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import { ref } from 'vue';
import { useStore } from 'vuex';



export default {
  name: "FacultySignUp",
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () =>{
      store.dispatch('register', register_form.value);
    }

    return {
      register_form,
      store,
      register
    }
  }
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
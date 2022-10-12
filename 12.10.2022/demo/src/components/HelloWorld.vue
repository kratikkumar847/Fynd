<template>
  <div class="hello">
    
       <input type="text" placeholder="Enter the Name" v-model="loginForm.name" name="name" v-validate="'min:5'" ><br>
       <input type="password" placeholder="Enter the Password" v-model="loginForm.password" ><br>
       <button @click="getLogin">Click here to login</button>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      loginForm : {
        name : '',
        password : ''
      }
    }
  },
  methods: {
   getLogin(){
    console.log('Here is the login details ', this.loginForm);
    if(errors.has('name')){
      console.log(errors.first('name'));
    }
   } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

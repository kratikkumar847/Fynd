<template>
  <div class="container">
    <div class="name">
      <p class="display-2 text-center">Samrat Ashok Technological Institute</p>
    </div>
    <br><br><br>
    <div class="image">
      <img src="../Images/CollegeLogo.jpg" alt="College Logo"  class="rounded mx-auto d-block" >
    </div>
    <br><br>
    <div class="items">
      <p>Click here to <a href="#">Check Result</a></p>
      <p>Click here to <a href="#">Faculty SignUp</a></p>
      <p>Click here to <a href="#">Faculty Login</a> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data() {
    return {
     
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
  .name {
    width: 100vw;
    background-color: grey;
    height: 100px;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .image,.items {
    text-align: center;
    margin-left: 160px;
  }

   
</style>
<template>
    <div>
     <nav class="navbar navbar-dark bg-success navbar-expand-sm">
     <div class="container">
      <router-link to="/faculty" class="navbar-brand">
        <i class="fa fa-2x fa-home"> </i> <span class="h4">FacultyHome</span>
      </router-link>

      <button @click='logout' class="text-decoration-none btn" style="color:white">Logout</button>
     </div>
    </nav><br><br>
    <p class="h3 fw-bold text-center">Student Information</p>
   </div>
</template>



<script>
    export default {
    name: 'FacultyHome',
    methods: {
        logout() {
        localStorage.clear();
        this.$router.replace("/");
        },
    },
    };
</script>

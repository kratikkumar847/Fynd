<template>
  <div class="container">
    <div class="name">
      <p class="display-2 text-center">Samrat Ashok Technological Institute</p>
    </div>
    <br /><br /><br />
    <div class="image">
      <img
        src="../images/CollegeLogo.jpg"
        alt="College Logo"
        class="rounded mx-auto d-block"
      />
    </div>
    <br /><br />
    <h1>Welcome to your profile</h1>
  </div>
</template>

<script>
export default {
  name: "Faculty",
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

.image,
.items {
  text-align: center;
  margin-left: 160px;
}
</style>
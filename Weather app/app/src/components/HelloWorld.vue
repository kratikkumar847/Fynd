<template>
  <div class="hello">
     <div class="container">
        <h1>Know The Weather of Any city in the world</h1>
        <label for="input">Enter the City</label>
        <br>
        <input type="text" id="input" v-model="CityName">
        <br>
        <button @click="getData">Search</button>
        <p>The Weather Of the Following city is </p>
        <p id="ans"></p>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      CityName: '',
      apiKey: "11b7edece7f49b9261b8f27412041c16"
    }
  },
  methods: {
    getData(){
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.CityName +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) =>
         this.displayWeather(data)
          // console.log(data)
         );
    },
    displayWeather(data){
      const { temp, humidity } = data.main;
      document.getElementById('ans').innerHTML = `The temperature of ${this.CityName} is ${temp} degree celsius and humidity is ${humidity}`
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .container {
    border: 2px solid black;
    width: 50vw;
    margin-left: 300px;
    margin-top: 200px;
}
</style>

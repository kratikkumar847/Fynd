<template>
    <!-- <div>
        <h2>{{FirstName}}</h2>
        <button v-on:click="change()"  v-bind:disabled="btnState">Change Name</button>
        {{btnState ? "The button is disabled" : "the button is active"}}
    </div> -->
    <div>
        <ol>
            <li v-for="(data1,index) in skills" :key='index'> {{data1.skill}}</li>
        </ol>
        <form @submit.prevent="AddSkill">
            <input type="text" placeholder="Enter your  skills" v-model="name">
        </form>
    </div>
</template>

<script>
    export default {
        name : 'NewCompo',
        data() {
            return {
                // FirstName : "kratik",
                // btnState : false
                skills : [
                    {'skill' : 'Vuejs'},
                    {'skill' : 'React'},
                    {'skill' : 'Angular'},
                ],
                name : ''
            }
        },
        methods : {
            // change() {
            //     this.FirstName = "sakshi";
            //     this.btnState = true;
            // }
            AddSkill(){
                this.skills.push({skill : this.name});
                this.name = '';
            }
        }
    }
</script>

<style scoped>
  
   
</style>

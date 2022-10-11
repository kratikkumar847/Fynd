<template>
    <div>
        <h1>This is heading of component 1</h1>
        <h2>{{FirstName}} {{LastName}}</h2>
    </div>
</template>

<script>
    export default {
        name : 'NewCompo',
        data() {
            return {
                FirstName : "kratik"
            }
        },
        props : {
            LastName : String
        }
    }
</script>

<style scoped>
    h1{
        color: white;
        background: black;
    }
</style>

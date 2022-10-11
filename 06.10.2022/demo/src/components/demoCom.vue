<template >
    <div>
        <h2>This is Component 1</h2>
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name : 'demoCom',
        props: {
        message: String
        }
    }
</script>


<style>
    h2{
        color : red;
    }
</style>
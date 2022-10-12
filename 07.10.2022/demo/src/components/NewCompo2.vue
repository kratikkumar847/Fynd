<template>
    <h1>{{isLength()}}</h1>
</template>

<script>
    export default {
        name : 'NewCompo2',
        data(){
            return {
                data1 : {
                    new1 : "first",
                    new2 : "second",
                    new3 : [1,2,3,4]
                }
            }
        },
        methods : {
            isLength(){
                return this.data1.new3.length>1 ? "yes":"np"
            }
        }
    }
</script>
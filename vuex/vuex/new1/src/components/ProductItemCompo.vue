<template>
    <div>
        <h1>Child Compo</h1>
        <button @click="NewTitle">Change Title</button>
    </div>
</template>

<script>
    export default {
        name : 'ProductItemCompo',
        methods:{
            NewTitle(){
                //#################  Mutations  #################
                // this.$store.commit('SetNewTitle');              //First method  to change the mutations
                // this.$store.commit('SetNewTitle',{title:'New again Data'});              //Second method  to change the mutations
                // this.$store.commit({                                        //Third method  to change the mutations
                //     type: 'SetNewTitle' , title: 'New again database'
                // });              



                //#################  ACTION  #################
                this.$store.commit({                                       
                    type: 'SetNewTitle' , title: 'New again database'
                });  
            }
        }
    }
</script>


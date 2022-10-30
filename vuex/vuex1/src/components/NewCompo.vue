<template>
    <div>
        <h1>New Compo First </h1>
        <Todoitem />
    </div>
</template>

<script>
import Todoitem from './Todoitem.vue'

export default {
    name : 'NewCompo',
    comments:{
            Todoitem
        }
    }
</script>
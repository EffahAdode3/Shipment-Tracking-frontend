<template>
    <div>
        <component :is="Nav"></component>
        <component :is="Slidbar"></component>




       <component :is="Content"></component>
    

    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import Content from'../components/Content.vue'
import Slidbar from '../components/Sidebar.vue'

export default{
    components:{
        Nav,
        Content,
        Slidbar,
    },
    data(){
        return{
           Nav,
           Content,
           Slidbar
        }
    }
}
</script>

<style lang="css" scoped>
</style>
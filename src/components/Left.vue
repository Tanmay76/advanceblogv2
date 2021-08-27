<template>    
    <div class="split left">
        <h5>
            Blog List
        </h5>
        <ul v-for="b in blog" :key="b.id">
            <li style="cursor:pointer" @click="sendData(b.id)">{{b.title}}</li>           
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default({
    computed:{
        ...mapState('blogdata',['blog'])
    },
    methods:{
        sendData: function(id){
            this.$emit("sendData",id)
        }
    }
})
</script>

<style scoped>
   .split {
        height:100%;
        width: 15%;
        position: fixed;
        z-index: 1;
        top:1;
        overflow-x: hidden;
        padding-top: 1px;
        color: #2c3e50; 
        border-right-style: solid;
        margin: 1px;      
   }
   .left {
       left: 0;       
   } 
</style>

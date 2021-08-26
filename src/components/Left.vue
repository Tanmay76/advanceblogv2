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
export default({
    data() {
        return{blog:[
            {id:0,title:'Blog 1', content:'content of blog one', like:0},
            {id:1,title:'Blog 2', content:'content of blog two', like:0},
            {id:2,title:'Blog 3', content:'content of blog three', like:0},
            {id:3,title:'Blog 4', content:'content of blog four', like:0}
        ]}
        
    },
    methods:{
        sendData: function(id){
            this.$emit("sendData",this.blog[id])
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

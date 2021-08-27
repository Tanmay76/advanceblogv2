<template>
    <div class="split right">
       <button @click="logout">Logout</button>
       <h3>{{getdata(bid).title}}</h3> 
       <p>{{getdata(bid).content}}</p>
       <button v-if="getdata(bid).title!=null" class="button" @click="incLike()">Like</button><p>{{getdata(bid).like}}</p>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default({
    props:{
        bid:null
    },    
    computed:{
        ...mapGetters('blogdata',['getdata'])
        
    },
    methods:{
        incLike:function(){
            this.$store.commit('blogdata/incLike', this.bid);
        },
        logout:function(){
            this.$store.state.cookey=null
            this.$router.push({name:'login'})
        }
    }
})
</script>
<style scoped>
   .split {
        height:100%;
        left: 15%;
        position: relative;
        z-index: 1;
        top:1;
        overflow-x: hidden;
        padding-top: 1px;
        color: #2c3e50;         
        margin: 1px;      
   }
   .right {
       right: 0;       
   } 
   .button {
        background-color: #ce0e4e;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: left;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>


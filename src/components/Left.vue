<template>    
    <div class="split left">
        <h5>
            Blog List
        </h5>
        <ul v-for="b in blog" :key="b.id">
            <li style="cursor:pointer" @click="sendData(b.id)">{{b.title}}</li>           
        </ul>
    <div>
        <b-button v-b-modal.modal-1>Add new Blog</b-button>
          <b-modal ref="my-modal" id="modal-1" hide-footer title="Launch a new Blog">
            <p class="my-4">Hello {{ namev }} add what new in your mind</p>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-small">Title:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input v-model='value.title' size="sm" placeholder="Enter title of Blog"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="2">
                        <label for="input-large">Content:</label>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input v-model='value.content' size="lg" placeholder="Enter content of Blog"></b-form-input>
                    </b-col>
                </b-row>
            <b-row>
                <b-col><b-button class="mt-2" variant="outline-success" margin-right block @click="addBlog">Save</b-button></b-col>
            </b-row>    
        </b-modal>
    </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default({
    data(){
       return{
           value:{id:4 , title:'', content:'', like:0}        
       }
    },
    props:{
        namev:null
    },
    computed:{
        ...mapState('blogdata',['blog'])
    },
    methods:{
        sendData: function(id){
            this.$emit("sendData",id)
        },
        addBlog:function(){
            this.$store.commit('blogdata/addBlog',this.value);
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

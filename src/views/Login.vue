<template>
    <div>
        <div style="text-align:center"><h1>Login Page</h1></div>
        <form id="loginForm" @submit.prevent="processForm" style="text-align:center; margin-top:10%">
            <div>
                <label>Name:</label>    
                <input type="text" name="name" v-model="name">
            </div>           
            <div style=" margin-top:25px"><button type="submit">Login</button></div>
        </form>       
    </div>
</template>
<script>
export default ({
    data(){
        return{
            name:"",             
            value:Object                             
        }
    },    
    methods:{
        processForm:function(){            
            for (var i=0; i<this.$store.state.user.length; i++){
                this.value=this.$store.state.user[i]                 
                if (this.value.username==this.name){
                    this.$store.state.cookey=this.value.username
                    this.$router.push({path:`/Blog/${this.value.username}`});
                }
            }    
                        
        }
    }  
})
</script>

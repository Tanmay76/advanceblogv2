<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">     --> 
    <h1>{{ $route.params.id }}</h1>
    <Left :namev="value" @sendData="sendData"></Left>
    <Right :bid="mainid"></Right>    
  </div>
    
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  name: 'App',
  components: {
    Left,
    Right
  },
  data(){
    return{mainid:null, value:this.$route.params.id}
  },
  methods:{
    sendData:function(blgid){
      this.mainid=blgid
    }
  } 
  
}
</script>
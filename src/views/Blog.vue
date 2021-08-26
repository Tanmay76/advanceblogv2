<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">     --> 
    <h1>{{ $route.params.id }}</h1>
    <Left @sendData="sendData"></Left>
    <Right :blog="mainData"></Right>    
  </div>
    
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Left,
    Right
  },
  data(){
    return{mainData:Object}
  },
  methods:{
    sendData:function(blg){
      this.mainData=blg
    }
  } 
  
}
</script>
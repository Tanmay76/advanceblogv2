<template>
  <div id="app">    
    <div id="nav">
      <h1 id='h'>Blogging.com</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/Blog/:id">Dashboard</router-link> |
      <router-link to="/about">About</router-link>      
    </div>
    <router-view :key="$route.path"/>
  </div>
</template>
<script>
export default({
  created(){
        this.$store.dispatch('loaduser')
    }, 
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
}
#h {
    text-align: left;
    margin: 0%;    
    color: #2c3e50;       
    }        
#nav {
  text-align:right;
  border-bottom-style:solid;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Mytest/> 
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Mytest from './components/Mytest'
export default {
  name: 'App',
  components: { //add your component here
    //HelloWorld
    Mytest 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

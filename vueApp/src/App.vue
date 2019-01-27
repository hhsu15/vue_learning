<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--
    <Mytest msg="This is passed as props"/> 
  -->
    <Users />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Mytest from './components/Mytest'
import Users from './components/Users'
export default {
  name: 'App',
  components: { //add your component here
    //HelloWorld
    Mytest, Users
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

<template>
  <div id="app">
    <Header/>
    <Home/>
    <!--<HomeFields/>-->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
//import HomeFields from './components/HomeFields.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home
    //HomeFields
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

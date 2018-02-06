<template>
  <div id="root">
    <header-component></header-component>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
//
//
//
//
//
//
//
//
//
//

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'footer-component': Footer,
  },
};
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

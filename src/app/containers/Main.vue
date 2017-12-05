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
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'footer-component': Footer
  }
};
</script>

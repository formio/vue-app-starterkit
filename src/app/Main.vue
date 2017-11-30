<template>
  <div id="root">
    <header-component></header-component>
    <div class="container">
      <formio src="https://examples.form.io/example"></formio>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { Formio } from 'vue-formio';
import 'formiojs/'
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'formio': Formio,
    'footer-component': Footer
  }
};
</script>

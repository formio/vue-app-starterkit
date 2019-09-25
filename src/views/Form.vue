<template>
  <div class="home">
    <Form src="https://examples.form.io/example" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Form } from 'vue-formio';

@Component({
  components: {
    Form,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="row">
    <div class="col-lg-6 col-md-6">
      <div class="panel panel-default login-container">
        <div class="panel-heading">
          Login
        </div>
        <div class="panel-body">
          <formio :src="loginForm" />
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6">
      <div class="panel panel-default register-container">
        <div class="panel-heading">
          Register
        </div>
        <div class="panel-body">
          <formio :src="registerForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Formio } from 'vue-formio';

export default {
  name: 'Auth',
  data: () => ({
    loginForm: "https://examples.form.io/user/login",
    registerForm: "https://examples.form.io/user/register"
  }),
  components: {
    'formio': Formio
  }
};
</script>

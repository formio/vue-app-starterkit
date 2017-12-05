<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Form.io Vue Starterkit</a>
      </div>
      <ul class="nav navbar-nav">
        <li>
          <router-link to="/" role="navigation button">
            <span class="glyphicon glyphicon-home" /> Home
          </router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link to="/auth" role="navigation link">
            Login | Register
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
};
</script>

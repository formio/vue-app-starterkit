<template>
  <div>
    <div class="jumbotron text-center">
      <h2 class="title">Welcome to your &lt;<span class="text-blue">form</span>.
        <span class="text-green">io</span>&gt; application!
      </h2>
      <h3>
        using
        <img alt="Vue.js" src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" class="hero-image" />
        Vue.js</h3>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3 text-center">
          <p class="lead">
            You can easily embed your Forms and Resources into this application using.
          </p>
          <div>
            <pre><code>&lt;formio src="https://examples.form.io/example" /&gt;</code></pre>
          </div>
          <p class="lead">Need Help?</p>
          <ul class="list-inline">
            <li>
              <a class="btn btn-lg btn-success" target="_blank" rel="noopener noreferrer" href="https://github.com/formio/vue-formio">Embedding</a>
            </li>
            <li>
              <a class="btn btn-lg btn-success" target="_blank" rel="noopener noreferrer" href="http://help.form.io">Documentation</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <formio src="https://examples.form.io/example"></formio>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

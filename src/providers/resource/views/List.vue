<template>
  <div class="formio-list">
    <router-link class="btn btn-primary" :to="$provider.rootPath + '/new'"><i class="glyphicon glyphicon-plus"></i> New {{ $provider.title }}</router-link>
  </div>
</template>
<script>
//
//
//
//
//

import { inject } from 'vue-expose-inject';

export default {
  computed: Object.assign(inject(['$provider']), {}),
};
</script>
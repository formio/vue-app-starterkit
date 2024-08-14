<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from '@/components/Navigation.vue';
</script>

<template>
    <div id="app">
        <Navigation />
        <RouterView />
    </div>
</template>

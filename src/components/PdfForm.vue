<template>
    <BRow>
        <BCol>
            <h2>PDF Forms</h2>
            <ExampleForm :code="code" src="https://examples.form.io/w4" />
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { BCol, BRow } from 'bootstrap-vue-next';
import ExampleForm from '@/components/ExampleForm.vue';

const code = `
<template>
  <Form src="https://examples.form.io/w4" />
</template>

<script setup lang="ts">
import { Form } from '@formio/vue';
<\/script>
`;
</script>

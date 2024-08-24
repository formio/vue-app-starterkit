<template>
    <BRow>
        <BCol>
            <h2>JSON Powered Forms</h2>
            <p>
                Form.io is a platform for JSON powered forms within Vue. Forms can be embedded as
                easy as the following code.
            </p>
            <ExampleForm :code="code" src="https://examples.form.io/example" />
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import { BCol, BRow } from 'bootstrap-vue-next';
import ExampleForm from '@/components/ExampleForm.vue';

const code = `
<template>
  <Form src="https://examples.form.io/example" />
</template>

<script setup lang="ts">
import { Form } from '@formio/vue';
<\/script>
`;
</script>

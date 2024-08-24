<template>
    <BRow>
        <BCol>
            <h2>Wizard Form</h2>
            <p>
                Form.io provides a way to build multi-page forms and easily embed them within your
                application using the following code.
            </p>
            <ExampleForm :code="code" src="https://examples.form.io/wizard" />
        </BCol>
    </BRow>
</template>

<script setup lang="ts">
import ExampleForm from '@/components/ExampleForm.vue';
import { BCol, BRow } from 'bootstrap-vue-next';

const code = `
<template>
  <Form src="https://examples.form.io/wizard" />
</template>

<script setup lang="ts">
import { Form } from '@formio/vue';
<\/script>
`;
</script>

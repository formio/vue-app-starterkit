<template>
    <BContainer>
        <p>
            The Vue JSON form renderer is a wrapper around the Form.io Core Renderer. This provides
            the ability to trivially render forms within your application.
        </p>
        <p>You can reference a form from a Form.io Enterprise Server...</p>
        <ExampleForm :code="code" src="https://examples.form.io/example" />
        <p>...and listen for change and submit events...</p>
        <ExampleForm
            :code="code2"
            src="https://examples.form.io/example"
            @change="() => console.log('The form changed!')"
            @submit="() => console.log('The form was submitted!')"
        />
        <p>...or pass a JSON form definition directly to the component...</p>
        <ExampleForm :code="code3" :form="formDefinition" />
        <p>...and even populate the form at runtime with submission data.</p>
        <ExampleForm :code="code4" :form="formDefinition" :submission="submissionData" />
    </BContainer>
</template>

<script setup lang="ts">
import { BContainer } from 'bootstrap-vue-next';
import ExampleForm from '@/components/ExampleForm.vue';

const formDefinition = {
    components: [
        {
            type: 'textfield',
            label: 'First Name',
            key: 'firstName',
            input: true,
        },
        {
            type: 'textfield',
            label: 'Last Name',
            key: 'lastName',
            input: true,
        },
        {
            type: 'email',
            label: 'Email',
            key: 'email',
            input: true,
        },
        {
            type: 'button',
            action: 'Submit',
            label: 'Submit',
            theme: 'primary',
        },
    ],
};
const submissionData = {
    data: {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joe@example.com',
    },
};

const code = `
<template>
  <Form src="https://examples.form.io/example" />
</template>

<script setup lang="ts">
import { Form } from '@formio/vue';
<\/script>
`;

const code2 = `
<template>
  <Form
    src="https://examples.form.io/example"
    @change="() => console.log('The form changed!')"
    @submit="() => console.log('The form was submitted!')"
  />
<\/template>

<script setup lang="ts">
import { Form } from '@formio/vue';
<\/script>
`;

const code3 = `
<template>
  <Form :form />
</template>

<script setup lang="ts">
import { Form } from '@formio/vue';

const form = ${JSON.stringify(formDefinition, null, 2)};
<\/script>
`;

const code4 = `
<template>
  <Form :form :submission />
</template>

<script setup lang="ts">
import { Form } from '@formio/vue';

const form = ${JSON.stringify(formDefinition, null, 2)};

const submission = ${JSON.stringify(submissionData, null, 2)};
<\/script>
`;
</script>

<template>
    <FormBuilder @change="onFormChange" />
    <BCard no-body class="my-4">
        <BCardBody>
            <BCardTitle class="text-center h5">As JSON Schema</BCardTitle>
            <VueJsonPretty :data="formSchema" :show-length="true" :collapsed-node-length="2" />
        </BCardBody>
    </BCard>
    <BCard no-body class="my-4">
        <BCardBody>
            <BCardTitle class="text-center h5">As Rendered Form</BCardTitle>
            <Form :form="formSchema" />
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { Form, FormBuilder, type FormType } from '@formio/vue';
import { BCard, BCardBody, BCardTitle } from 'bootstrap-vue-next';
import { ref } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const formSchema = ref<FormType>({
    display: 'form',
    components: [
        {
            type: 'button',
            action: 'submit',
            label: 'Submit',
            input: true,
            key: 'submit',
        },
    ],
});

const onFormChange = (schema: FormType) => {
    formSchema.value = schema;
};
</script>

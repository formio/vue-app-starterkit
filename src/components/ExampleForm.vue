<template>
    <BCard className="p-4 mb-4">
        <h5>Code</h5>
        <VCodeBlock
            :code="code"
            theme="atom-one-light"
            lang="html"
            codeBlock="{true}"
            showLineNumbers="{false}"
            highlightjs
        />
        <div className="spacer" />
        <h5>Result</h5>
        <div className="bg-light rounded-3 p-5 mb-4">
            <Form v-bind="formProps" />
        </div>
    </BCard>
</template>

<script setup lang="ts">
import { Form, type FormProps } from '@formio/vue';
import { VCodeBlock } from '@wdns/vue-code-block';
import { BCard } from 'bootstrap-vue-next';

const props = defineProps<
    FormProps & {
        code: string;
    }
>();

const { code, ...formProps } = props;
</script>

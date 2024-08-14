<template>
    <BContainer class="pt-5">
        <div class="bg-light rounded-3 p-5 mb-4">
            <h2>
                JavaScript Powered Forms for
                <a
                    href="https://vuejs.org"
                    :style="{
                        marginBottom: '10px',
                        padding: '0 0.5rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }"
                >
                    Vue
                    <VueLogo height="2.5rem" />
                </a>
                by
                <a
                    href="https://form.io"
                    target="_blank"
                    rel="noreferrer"
                    :style="{ padding: '0 0.4rem' }"
                >
                    <img
                        alt="Form.io logo"
                        :src="logo"
                        :style="{ height: '3rem', display: 'inline' }"
                    />
                </a>
            </h2>
            <p>
                This library provides JavaScript powered forms for
                <a target="_blank" href="https://vuejs.org" rel="noreferrer">Vue</a>. This allows
                you to render the JSON schema forms produced by Form.io and render those within your
                application using Vue, as well as provides an interface SDK to communicate to the
                Form.io API's. The benefits of this library include.
            </p>
            <ul>
                <li>
                    Renders a JSON schema as a webform and hooks up that form to the Form.io APIs
                </li>
                <li>
                    Nested components, layouts, Date/Time, Select, Input Masks, and many more
                    included features
                </li>
                <li>Full JavaScript API SDK library on top of Form.io</li>
            </ul>
        </div>
        <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">Code</h5>
                <VCodeBlock
                    :code="code"
                    theme="atom-one-light"
                    lang="html"
                    codeBlock="{true}"
                    showLineNumbers="{false}"
                    highlightjs
                />
            </div>
        </div>
        <div class="card p-3">
            <h5 class="card-title">Result</h5>
            <div class="card-body bg-light rounded-3">
                <Form src="https://examples.form.io/example" @submit="onSubmitHandler" />
            </div>
        </div>
    </BContainer>
</template>

<script setup lang="ts">
import { Form, type Submission } from '@formio/vue';
import VCodeBlock from '@wdns/vue-code-block';
import { BContainer } from 'bootstrap-vue-next';
import { ref } from 'vue';
import logo from '@/assets/Light-Background.png';
import VueLogo from '@/components/svg/VueLogo.vue';

const code = ref(`
  <template>
    <Form src="https://examples.form.io/example" @submit="onSubmitHandler" />
  </template>

  <script setup lang="ts">
  import { Form, type Submission } from '@formio/vue';

  const onSubmitHandler = (submission: Submission) => {
    console.log(submission);
  };
  <\/script>
`);

const onSubmitHandler = (submission: Submission) => {
    console.log(submission);
};
</script>

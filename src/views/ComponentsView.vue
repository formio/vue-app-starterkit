<template>
    <BContainer class="pt-5">
        <BTabs
            pills
            vertical
            class="row"
            nav-wrapper-class="col-2"
            content-class="col-10"
            nav-class="w-100"
            nav-item-class="w-100 text-start"
        >
            <BTab title="Form Renderer" active><Renderer /></BTab>
            <BTab title="Form Builder"><Builder /></BTab>
            <BTab title="Simple Form"><SimpleForm /></BTab>
            <BTab title="Wizard Form"><WizardForm /></BTab>
            <BTab title="PDF Form"><PdfForm /></BTab>
        </BTabs>
    </BContainer>
</template>

<script setup lang="ts">
import { BContainer, BTab, BTabs } from 'bootstrap-vue-next';
import Builder from '@/components/Builder.vue';
import PdfForm from '@/components/PdfForm.vue';
import Renderer from '@/components/Renderer.vue';
import SimpleForm from '@/components/SimpleForm.vue';
import WizardForm from '@/components/WizardForm.vue';
</script>

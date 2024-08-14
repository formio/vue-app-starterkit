<script setup lang="ts">
import {
    BCollapse,
    BContainer,
    BImg,
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle,
    BNavItem,
} from 'bootstrap-vue-next';
import logo from '@/assets/Light-Background.png';
import VueLogo from '@/components/svg/VueLogo.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <BNavbar variant="light" toggleable="lg" :container="false">
        <BContainer>
            <BNavbarBrand>
                <RouterLink to="/">
                    <div className="formio-brand">
                        <BImg :src="logo" :style="{ height: '2.2rem' }" />
                        <span>+</span>
                        <VueLogo height="2.2rem" />
                    </div>
                </RouterLink>
            </BNavbarBrand>
            <BNavbarToggle target="basic-navbar-nav" aria-controls="basic-navbar-nav" />
            <BCollapse id="basic-navbar-nav" class="justify-content-end" is-nav>
                <BNavbarNav>
                    <BNavItem to="components">Examples</BNavItem>
                    <BNavItem href="https://github.com/formio/vue">
                        <i className="fa fa-book me-1"></i>
                        <span>Docs</span>
                    </BNavItem>
                    <BNavItem href="https://github.com/formio/vue">
                        <i className="fa fa-star me-1"></i>
                        <span>Star</span>
                    </BNavItem>
                    <BNavItem href="https://github.com/formio/vue/fork">
                        <i className="fa fa-code-fork me-1"></i>
                        <span>Fork</span>
                    </BNavItem>
                </BNavbarNav>
            </BCollapse>
        </BContainer>
    </BNavbar>
</template>

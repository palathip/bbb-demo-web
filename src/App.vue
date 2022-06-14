<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
    <div>
        <nav-bar />
    </div>
    <router-view></router-view>
</template>

<style>
#app {
    @apply text-center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        console.log('Welcome to homepage')
        const router = useRouter()
        function goTo(r: string) {
            router.push(r)
        }
        return { goTo }
    },
    components: {
        HelloWorld,
    },
}
</script>

<template>
    <div>
        <router-link to="/test">test by router-link</router-link>
        <br />
        <button @click="goTo('/test')">Test Page</button>
        <br />
        <hello-world msg="Hi there!!" />
    </div>
</template>

<style></style>

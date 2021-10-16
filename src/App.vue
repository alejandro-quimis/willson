<template>
    <v-app id="app">
        <Navegacion/>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import Navegacion from '@/components/Navegacion';

export default {
    name: 'blog',
    components: {
        Navegacion
    }
};
</script>

<style></style>

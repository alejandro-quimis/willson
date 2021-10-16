<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center ">
                BLOG DE NOTICIAS
            </div>

            <div class="display-1 font-weight-bold white--text text-xs-center">
                Este es un blog de prueba para mostrar noticias locales, remotas y remotas +.
            </div>
            <!-- <v-btn fab class="mt-5 brown darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn> -->
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'home'
};
</script>

<style scoped>
.home-hero {
    background: url('~@/assets/periodicos.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>

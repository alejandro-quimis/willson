<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="brown lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" :to="item.url">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="brown darken-4" dark>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title>{{
                    appTitle
                }}</v-toolbar-title>
            </router-link>
            <v-btn
                flat
                class="hidden-sm-and-down nav-menu"
                to="/menu"
                >Noticias Disponibles</v-btn
            >
            <v-btn
                flat
                class="hidden-sm-and-down nav-menu"
                to="/locales"
                >Noticias Locales</v-btn
            >
            <v-btn
                flat
                class="hidden-sm-and-down nav-menu"
                to="/gnews"
                >GNews</v-btn
            >
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div class="hidden-sm-and-down" v-if="!estaLogueado">
                <v-btn  flat to="/login" >Iniciar Sesión</v-btn>
            </div>
            <div v-if="estaLogueado">
                <v-btn outline color="white" @click="logout"
                    >Cerrar Sesión</v-btn
                >
            </div>
        </v-toolbar>
    </span>
</template>

<script>
import router from '@/router';
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Inicio',
            drawer: false,
            items: [
                { title: 'Menu', url: '/menu' },
                { title: 'Profile', url: '/about' },
                { title: 'Registrar', url: '/login' },
                { title: 'Join', url: '/join' }
            ]
        };
    },
    computed: {
        estaLogueado() {
            return this.$store.getters.estaLogueado;
        },
    },
    methods: {
        
        logout() {
            localStorage.removeItem("usuario");
            this.$store.commit('setEstaLogueado',false);
            location.reload();
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>

<template>
    <span>
        <Session />
        <noticias-disponibles />
        <noticias-locales></noticias-locales>
        <!-- <Gnews></Gnews> -->
    </span>
</template>

<script>
import Session from '@/components/Session';
import NoticiasDisponibles from '@/components/NoticiasDisponibles';
import NoticiasLocales from '@/components/NoticiasLocales';
import Gnews from '@/components/NoticiasGnews';

export default {
    name: 'home',
    components: {
        Session,
        NoticiasLocales,
        NoticiasDisponibles,
        Gnews
    }
};
</script>

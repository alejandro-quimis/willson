<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Noticias Disponibles
                <v-btn
                v-if="estaLogueado"
                    outline
                    color="#3e2723"
                    @click="agregar()"
                >
                    Agregar</v-btn
                ></v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md6  v-for="(lista,index) in listas" :key="index">
                <v-card>
                    <v-responsive>
                        <v-img
                            :src="lista.link"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >{{lista.name}}</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">{{lista.name}}</h3>
                            <div>{{lista.description}}</div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="estaLogueado">
                        <v-btn
                            outline
                            color="Brown"
                            @click="editar(lista.id)"
                        >
                            Editar</v-btn
                        >
                        <v-btn
                            outline
                            color="Brown"
                            @click="eliminar()"
                        >
                            Eliminar</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
import router from '@/router';
export default {
    name: 'HomePlans',
    data(){
        return{
            listas:[],
        }
    },
    computed:{
        estaLogueado() {
            return this.$store.getters.estaLogueado;
        },
    },
    async mounted(){
        const {data} = await this.$store.dispatch('obtenerTodosPost');
        this.listas = data;  
    },
    methods: {
        editar(id) {
            router.push('/mantenimiento/'+id);
        },
        async eliminar(){
            const {data} = await this.$store.dispatch('eliminarPost');
        },
        agregar(){
            router.push('/mantenimiento');
        }
        
    }
};
</script>

<style scoped></style>

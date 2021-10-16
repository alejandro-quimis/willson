<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Noticias Locales
                </v-flex
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
                </v-card>
            </v-flex>

        </v-layout>
        
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    data(){
        return{
            listas:[],
        }
    },
    async mounted(){
        const {data} = await this.$store.dispatch('obtenerTodosPost');
        this.listas = data;  
    },
    methods: {
        showRecipes() {
            this.$store.dispatch('obtenerTodosPost')
            .then(({data}) => {
                console.log(data);            
            });
        }
        
    }
};
</script>

<style scoped></style>

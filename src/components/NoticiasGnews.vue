<template>
<div>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Noticias GNews
                <v-btn
                    outline
                    color="#3e2723"
                    @click="showRecipes('keto')"
                >
                    Agregar</v-btn
                >
            </v-flex
            >
        </v-layout>
       <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md6  v-for="(lista,index) in listas" :key="index">
                <v-card>
                    <v-responsive>
                        <v-img
                            :src="lista.image"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >{{lista.title}}</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">{{lista.title}}</h3>
                            <div>{{lista.description}}</div>
                        </div>
                    </v-card-text>

                    <v-card-actions >
                        <v-btn
                            outline
                            color="Brown"
                            @click="showRecipes('keto')"
                        >
                            Editar</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
        
    </v-container>
    <div class="padre">
        <v-container>
            <v-container class="max-width">
                <v-pagination
                v-model="pagina"
                class="my-4"
                :length="total"
                @input="sigPagina"
                :total-visible="6"
                ></v-pagination>
            </v-container>
        </v-container>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomePlans',
    data(){
        return{
            listas:[],
            total:0,
            pagina:1
        }
    },
    async mounted(){
        try {
            const {data} = await this.$store.dispatch('obtenerTodosGnews',this.pagina);
            this.listas = data.articles;
            console.log(parseInt(data.totalArticles / 10),"Kkkkkk");
            this.total = parseInt(data.totalArticles / 10); 
        } catch (error) {
            
        }
    },
    methods: {
        async sigPagina(pagina){
            this.listas = [];
            this.pagina = pagina;
            const {data} = await this.$store.dispatch('obtenerTodosGnews',this.pagina);
            this.listas = data.articles;
            this.total = parseInt(data.totalArticles / 10); 
        },
        showRecipes() {
            this.$store.dispatch('obtenerTodosPost')
            .then(({data}) => {
                console.log(data);            
            });
        }
        
    }
};
</script>

<style scoped>
.padre {
  margin: 1rem;
  padding: 1rem;
  /* IMPORTANTE */
  text-align: center;
}
</style>

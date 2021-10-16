<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs12 sm12 md12>
                <v-card class="elevation-12">
                    <v-toolbar dark color="#3e2723">
                        <v-toolbar-title>Registrar Post</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-textarea
                            color="#3e2723"
                                prepend-icon="note"
                                name="Descripcion"
                                label="Descripción"
                                type="text"
                                v-model="postModel.description"
                                :rules="requerido"
                                required
                            >
                            </v-textarea>
                            <v-text-field
                                color="#3e2723"
                                prepend-icon="message"
                                name="Titulo"
                                label="Titulo"
                                v-model="postModel.name"
                                :rules="requerido"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                color="#3e2723"
                                prepend-icon="link"
                                name="LinkImagen"
                                label="Link Imagen"
                                v-model="postModel.link"
                                :rules="requerido"
                                required
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            :disabled="!valid"
                            @click="submit"
                            style="background-color:#3e2723!important;color:white"
                            >Guardar</v-btn
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
    name: 'Signin',
    data() {
        return {
            valid: false,
            requerido: [
                v => !!v || 'Es requerido',
            ],
            postModel:{
                description: "",
                id: 0,
                link: "",
                name: "",
                registered: "", 
            }

        };
    },
    async created(){
         const id = this.$route.params && this.$route.params.id;
         if(id > 0){
            const {data} = await this.$store.dispatch('obtenerPost',id);
            this.postModel = data;  
         }
    },
    methods: {
        async submit() {
            if (this.$refs.form.validate()) {
                try {
                    if(this.postModel > 0){
                        const {data} = await this.$store.dispatch('actualizarPost',this.postModel);
                        console.log(data);  
                    }else{
                        const {data} = await this.$store.dispatch('crearPost',this.postModel);
                        console.log(data);
                    }

                } catch (error) {
                    console.log(error,"Error");
                }
                
            }else{
                this.snackbar=true;
                this.text = "No se encuentra en los registros";
            }
        }
    }
    // description: "Check out the attractive prices of these two watches that have water resistance and offer a good experience with the SpO2 sensors and the heart monitor for physical activities. In theory, these watches are designed for men (model W12) and women (model W11) because of the difference in screen size. Regardless, there are more differences between these two smartwatches. Take a look at each of the models below. Screen and finish"
    // id: 1
    // link: "https://cdn.phonemore.com/content/2021/jpg/17175.jpg"
    // name: "IMILAB W12 and W11 smartwatches are cheap and offer a good experience"
    // registered: "2021-10-11T16:07:00"
};
</script>

<style scoped></style>

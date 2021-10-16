<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="#3e2723">
                        <v-toolbar-title>Login Noticias</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                            color="#3e2723"
                                prepend-icon="person"
                                name="Usuario"
                                label="Usuario"
                                type="text"
                                v-model="usuario"
                                :rules="emailRules"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                            color="#3e2723"
                                prepend-icon="lock"
                                name="Contraseña"
                                label="Contraseña"
                                type="password"
                                v-model="password"
                                :rules="passwordRules"
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
                            >Login</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <div class="text-center ma-2">
            <v-snackbar v-model="snackbar" >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                color="pink"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Cerrar
                </v-btn>
            </template>
            </v-snackbar>
        </div>
    </v-container>
</template>

<script>
import router from '@/router';
export default {
    name: 'Signin',
    data() {
        return {
            snackbar: false,
            text: `No se encuentra en los registros`,
            valid: false,
            usuario: '',
            password: '',
            emailRules: [
                v => !!v || 'Usuario es requerido',
            ],
            passwordRules: [
                v => !!v || 'Contraseña es requerido',
            ]
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                if(this.usuario == "admin" && this.password == "123456"){
                    localStorage.setItem('usuario',JSON.stringify("admin"));
                    this.$store.commit('setEstaLogueado',true);
                    router.push('/');
                }
            }else{
                this.snackbar=true;
                this.text = "No se encuentra en los registros";
            }
        }
    }
};
</script>

<style scoped></style>

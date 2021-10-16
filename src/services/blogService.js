import config from "@/config/AppConfig";
import Axios from 'axios';

export default {	
	
	async obtenerTodosPost() {
		return Axios.get(config.baseUrlBlog + "/post",{
            headers: {
                'Content-Type': 'application/json'
            }
        });
	},

    async obtenerTodosGnews(pagina) {
		return Axios.get(config.baseUrlGnews + "/v4/top-headlines?"+"max=10&lang=es&page="+pagina+"&token="+config.baseToken,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
	},

    async obtenerPost(id){
        return Axios.get(config.baseUrlBlog + "/post/"+id,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    async actualizarPost(modelo){
        return Axios.post(config.baseUrlBlog + "/Post/Update", JSON.stringify(modelo),{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    async crearPost(modelo){
        return Axios.post(config.baseUrlBlog + "/Post/Creacion", JSON.stringify(modelo),{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },

    async eliminarPost(modelo){
        return Axios.post(config.baseUrlBlog + "/Post/delete", JSON.stringify(modelo),{
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
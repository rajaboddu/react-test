import axios from "axios";


export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '1411a17ff5564ac1aea73aa383ae8c4d'
    }
})
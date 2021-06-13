import axios from "axios";
import { API_URL } from '../env';

const getService = (info) => {
    let url = info.url;
    let header = "";

    if(info.token) {
        header = { Authorization: info.token };
        return axios.get( url, { headers: header })
    } else {
        return axios.get( url );
    }
    
}

const postService = (info) => {
    let header = { Authorization: info.token };
    return axios.post(info.url, info.data, { headers: header });
}

const subscribeClass = (info) => {

    let header = "";
    let data = {};
    
    if(info.data.name) {
        data = info.data;
        return axios.post( API_URL.SUBSCRIBE_REGISTER, data);
    } else {
        data = {
            price: info.data.price,
            id_class: info.data.id_class,
        };
        header = { Authorization: info.token };
        return axios.post( API_URL.SUBSCRIBE, data, { headers: header });
    }
}


export const axiosService = {
    getService,
    subscribeClass,
    postService
}
import axios from 'axios';
import { ValidEndpoint } from '../models/enums/validEndpoint';
//TODO: type the callback correctly
export default function useAPI(url:string, endpoint:ValidEndpoint, callback:(res:any)=>any){
    console.log(`Inside apiHook url: ${url} \n endpoint: ${endpoint} \n callback: ${callback}`);
    switch(endpoint){
        case 1:{
            return axios.get(url).then(res =>{
                console.log(`Response inside of get case: ${res.data}`);
               return callback(res.data);
            }).catch(err =>{
                console.log(`Error in get function for ${url}. Error: ${err}`);
            })    
        }
        // case 2:{
        //     return axios.post(url).then(res =>{

        //     })
        // }
    }
}
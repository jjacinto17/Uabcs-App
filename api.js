import axios, { AxiosError } from "axios"
import {getItemAsync} from 'expo-secure-store'
const URL = 'https://3e85-2806-1016-11-bfe7-bcda-bac3-44cc-39ea.ngrok-free.app/'

export const getData = async () => {
    const token = getItemAsync('acces_token')

    const getInfo = await axios.get(URL,{
        headers:{
            Authorization:`Bearer${token}`
        }
    })
    if(!data){
        throw AxiosError        
    }
  //estoy manjando el error, en caso que no venga el jwt ,ponerle tiempo de expiracione n el back y crear variable aqui en front para salir si expira e token   
    const data = getInfo.data

    return await data
}
export const signIn = async (email, matricula) => {
    const data = {
        "email": email,
        "matricula": matricula
    }
    try {
        const res = await axios.post(`${URL}auth/signIn`, data)
        console.log("respuesta del servidor:", res.data)
        token = res.data

    } catch (e) {
        console.log(e)
    }
    return token
}

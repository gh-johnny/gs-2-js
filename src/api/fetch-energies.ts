import axios from "axios"
import { TEnergy } from "../types/energy-type"

export const fetchEnergies = async() => {
    try{
        const res = await axios.get('/data/energies.json')
        return res.data as TEnergy[]
    }catch(err){
        console.error('Não foi possível pegar energias limpas: ', err)
    }
}

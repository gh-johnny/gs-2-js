import axios from "axios"

export const fetchEnergies = async() => {
    try{
        const res = await axios.get('/data/energies.json')
        return res.data
    }catch(err){
        console.error('Não foi possível pegar energias limpas: ', err)
    }
}

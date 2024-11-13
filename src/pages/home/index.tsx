import { useEffect } from "react";
import EnergyCard from "../../components/cards/EnergyCard";
import { fetchEnergies } from "../../api/fetch-energies";

export default function Home() {

    useEffect(() => {
        const makeFetch = async() => {
            const data = await fetchEnergies()
            console.log(data)
        }
        makeFetch()
    }, [])

    return (
        <>
            <EnergyCard />
        </>
    )
}

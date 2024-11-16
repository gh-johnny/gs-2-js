import { Link, useParams } from "react-router-dom"
import useMount from "../../hooks/useMount"
import { useCallback, useState } from "react"
import { fetchEnergies } from "../../api/fetch-energies"
import { TEnergy } from "../../types/energy-type"
import { ChevronLeft } from "lucide-react"

import { Main, BackButton, ContentWrapper, BackButtonWrapper, AsideImage, ContentList, AsideContent, ContentSpecs, ContentTitle, ContentDescription } from "./style"

type TEnergyModified = Omit<TEnergy, 'description'> & {
    description: string[]
}

export default function EnergySource() {
    const { id } = useParams()

    const [content, setContent] = useState<TEnergyModified | null>(null)

    const formatDescription = (text: string) => {
        return text.split('\n').map(item => item.trim()).filter(item => item)
    }

    const fetchEnergySources = useCallback(async () => {
        const data = await fetchEnergies()
        if (!data) return setContent(null)
        for (let i = 0; i < data?.length; i++) {
            if (String(data[i].id) === id) return setContent({ ...data[i], description: formatDescription(data[i].description) })
        }
    }, [id])

    useMount(() => {
        fetchEnergySources()
    })

    return content && (
        <Main>
            <BackButtonWrapper>
                <Link to="/">
                    <BackButton>
                        <ChevronLeft />
                        <span>Voltar</span>
                    </BackButton>
                </Link>
            </BackButtonWrapper>
            <ContentWrapper>
                <AsideImage>
                    <img src={content.image} alt="Imagem de uma fonte de energia renovável" />
                </AsideImage>
                <AsideContent>
                    <ContentTitle>{content.title}</ContentTitle>
                    <ContentDescription>
                        <ContentList>
                            {content.description.map((item, index) => (
                                <li key={index}>{item.replace(/^•\s*/, '')}</li>
                            ))}
                        </ContentList>
                        <ContentSpecs>
                            <div>Popularidade: <span>{content.popularity}</span></div>
                            <div>Sustentabilidade: <span>{content.sustainability}</span></div>
                        </ContentSpecs>
                    </ContentDescription>
                </AsideContent>
            </ContentWrapper>
        </Main>
    )
}

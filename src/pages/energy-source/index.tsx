import { Link, useParams } from "react-router-dom"
import useMount from "../../hooks/useMount"
import { useCallback, useState } from "react"
import { fetchEnergies } from "../../api/fetch-energies"
import { TEnergy } from "../../types/energy-type"
import styled from "styled-components"
import { ChevronLeft } from "lucide-react"

const Main = styled.main`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: .5rem;
`

const BackButtonWrapper = styled.div`
  width: 70%;
`

const BackButton = styled.button`
  padding: .5rem 1rem;
  border: 1px solid var(--bg-accent);
  align-self: start;
  border-radius: 8px;
  display: flex;
  column-gap: .3rem;
  transition: all 0.1s ease;

  &:hover {
      scale: 1.03;
      cursor: pointer;
      opacity: .9;
  }
`

const ContentWrapper = styled.section`
  display: flex;
  width: 70%;
  height: 70%;
  border: 1px solid var(--bg-accent);
  border-radius: 12px;
  overflow: hidden;
`

const AsideImage = styled.aside`
  height: 100%;
  width: 45%;
  border-right: 1px solid var(--bg-accent);
  
  img {
      object-fit: cover;
      width: 100%;
      height: 100%;
  }
`

const AsideContent = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`

const ContentTitle = styled.h1`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.75rem;
  border-bottom: 1px solid var(--bg-accent);
`

const ContentDescription = styled.article`
  height: 100%;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
`

const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  list-style-type: "✔ ";
  padding: 3rem;
  overflow-y: auto;
`

const ContentSpecs = styled.div`
  border-top: 1px solid var(--bg-accent);
  height: 12.5rem;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
`

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
                        <ChevronLeft width={16} />
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

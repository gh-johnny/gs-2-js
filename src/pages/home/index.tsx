import { useCallback, useState } from "react"
import EnergyCard from "../../components/cards/EnergyCard"
import { fetchEnergies } from "../../api/fetch-energies"
import { Link } from "react-router-dom"
import { TEnergy } from "../../types/energy-type"
import { Earth, HousePlug, Leaf, Sun, Wind, Zap } from "lucide-react"
import useMount from "../../hooks/useMount"
import styled from "styled-components"

const Container = styled.div`
  background-color: var(--bg-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NavContainer = styled.div`
  width: 100%;
  diplay: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2vw;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
      display: flex;
      column-gap: 2vw;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  border: 2px solid transparent;
  border-radius: 3px;
  transition: all 100ms ease;

  &:hover {
      border-bottom: 2px solid var(--bg-accent);
  }
`;

const HeroSection = styled.section`
  color: white;
  padding: 5rem 0;
  border-block: 1px solid var(--bg-accent);
  width: 100dvw;
  overflow: hidden;
  position: relative;
  isolation: isolate;
  background: linear-gradient(to right, var(--yellow-primary), var(--orange-primary));


  &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, var(--green-primary), #48bb78);
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      animation: changeColorReverse 45s infinite alternate;
  }

  @keyframes changeColor {
      0% {
          opacity: 0
      }
      25% {
          opacity: 1
      }
      50% {
          opacity: 0
      }
      75% {
          opacity: 0
      }
      100% {
          opacity: 1
      }
  }

  @keyframes changeColorReverse {
      0% {
          opacity: 1
      }
      25% {
          opacity: 0
      }
      50% {
          opacity: 1
      }
      75% {
          opacity: 1
      }
      100% {
          opacity: 0
      }
  }
`;

const HeroContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
  position: relative;

  a {
      border: 1px solid var(--bg-accent);
      padding: .75rem 1.5rem;
      border-radius: 12px;
      background: #fff;
      color: var(--fg-primary);
      transition: ease 100ms;

      &:hover {
        transform: scale(1.05);
      }
  }
`;

const HeroTitle = styled.h1`
  text-shadow: -1px -1px 0 var(--bg-accent), 1px -1px 0 var(--bg-accent), -1px  1px 0 var(--bg-accent), 1px  1px 0 var(--bg-accent);
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  padding-inline: 3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  text-shadow: -1px -1px 0 var(--bg-accent), 1px -1px 0 var(--bg-accent), -1px  1px 0 var(--bg-accent), 1px  1px 0 var(--bg-accent);
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const HeroIcon = styled.div`
 position: absolute;
 width: 4rem;
 height: 4rem;
 color: #fff;
 z-index: -1;

    &:nth-child(even) {
        animation: changeColorReverse 45s infinite alternate;
    }

    &:nth-child(odd) {
        animation: changeColor 45s infinite alternate;
    }

    &:nth-child(3) {
        top: 27%;
        right: -4%;
    }

    &:nth-child(4) {
        top: 27%;
        right: -4%;
    }

    &:nth-child(5) {
        left: 2%;
    }

    &:nth-child(6) {
        left: 2%;
    }
`

const AboutSection = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const AboutText = styled.p`
  max-width: 768px;
  margin: 0 auto;
  font-size: 1.125rem;
  padding-inline: 2rem; 
`;

const SourcesSection = styled.section`
  padding-top: 2rem;
`;

const SourcesTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 2rem;
  border-top: 1px solid var(--bg-accent);
`

const SourcesText = styled.p`
  max-width: 768px;
  margin: 0 auto;
  font-size: 1.125rem;
  padding-bottom: 2rem;
  padding-inline: 2rem; 
  text-align: center;
`

const SourcesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  border-bottom: 1px solid var(--bg-accent);
  margin: 0 auto;
  padding: 4vw;
  padding-bottom: 8rem;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &>*:last-child {
      grid-column: 1 / -1;
  }
`;

const Footer = styled.footer`
  padding: 2rem 0;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  padding-block: 1rem;
  flex-wrap: wrap;
  row-gap: 3rem;
`;

const FooterTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled(Link)`
`;

const FooterIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Copyright = styled.div`
  border-top: 1px solid #4a5568;
  padding-top: 2rem;
  text-align: center;
`;

export default function Home() {

    const [energySources, setEnergySources] = useState<TEnergy[] | undefined>([])

    const fetchEnergySources = useCallback(async () => {
        const data = await fetchEnergies()
        setEnergySources(data)
    }, [])

    useMount(() => {
        fetchEnergySources()
    })

    return (
        <Container>
            <NavContainer>
                <Navbar>
                    <Link to="/">EnergyAccess</Link>
                    <ul className="flex space-x-4">
                        <li><NavLink href="#about">Sobre</NavLink></li>
                        <li><NavLink href="#sources">Fontes</NavLink></li>
                        <li><NavLink href="#contact">Contato</NavLink></li>
                    </ul>
                </Navbar>
            </NavContainer>

            <main>
                <HeroSection>
                    <HeroContent>
                        <HeroTitle>Acesso Universal à Energia</HeroTitle>
                        <HeroDescription>Explorando fontes de energia sustentáveis para um futuro mais brilhante e acessível a todos.</HeroDescription>
                        <HeroIcon>
                            <Zap />
                        </HeroIcon>

                        <HeroIcon>
                            <Leaf />
                        </HeroIcon>

                        <HeroIcon>
                            <HousePlug />
                        </HeroIcon>

                        <HeroIcon>
                            <Earth />
                        </HeroIcon>
                        <a href="#about">
                            Saiba Mais
                        </a>
                    </HeroContent>
                </HeroSection>

                <AboutSection id="about">
                    <AboutTitle>Sobre o Projeto</AboutTitle>
                    <AboutText>
                        Nosso objetivo é informar, refletir e educar sobre as diversas fontes de energia e a importância de torná-las acessíveis para comunidades ao redor do mundo. Através desta plataforma, exploramos como diferentes tecnologias podem contribuir para o acesso universal à energia, promovendo um futuro mais sustentável e equitativo.
                    </AboutText>
                </AboutSection>

                <SourcesSection id="sources">
                    <div>
                        <SourcesTitle>Fontes de Energia</SourcesTitle>
                        <SourcesText>Aqui estão as fontes de energia com rankings (de 1 - 10) elaborados por nós de acordo com pesquisas da área, não refletindo num valor absoluto real, porém uma mera estimativa.</SourcesText>
                        <SourcesGrid>
                            {energySources?.map((source, index) => (
                                <Link  key={index} to={`energy-source/${source.id}`}>
                                    <EnergyCard card={source} />
                                </Link>
                            ))}
                        </SourcesGrid>
                    </div>
                </SourcesSection>
            </main>

            <Footer>
                <FooterContainer>
                    <FooterSection>
                        <section>
                            <FooterTitle>EnergyAccess</FooterTitle>
                            <p>Promovendo o acesso universal à energia sustentável.</p>
                        </section>
                        <section>
                            <FooterTitle>Links Rápidos</FooterTitle>
                            <FooterLinks>
                                <li><FooterLink to="#about">Sobre</FooterLink></li>
                                <li><FooterLink to="#sources">Fontes de Energia</FooterLink></li>
                                <li><FooterLink to="#contact">Contato</FooterLink></li>
                            </FooterLinks>
                        </section>
                        <section id="contact">
                            <FooterTitle>Siga-nos</FooterTitle>
                            <FooterIcons>
                                <a href="#"><Sun /></a>
                                <a href="#"><Wind /></a>
                                <a href="#"><Zap /></a>
                            </FooterIcons>
                        </section>
                    </FooterSection>
                </FooterContainer>
                <Copyright>
                    <p>&copy; {new Date().getFullYear()} EnergyAccess. Todos os direitos reservados.</p>
                </Copyright>
            </Footer>
        </Container>
    )
}

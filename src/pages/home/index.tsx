import { useCallback, useState } from "react"
import EnergyCard from "../../components/cards/EnergyCard"
import { fetchEnergies } from "../../api/fetch-energies"
import { Link } from "react-router-dom"
import { TEnergy } from "../../types/energy-type"
import { Sun, Wind, Zap } from "lucide-react"
import useMount from "../../hooks/useMount"
import styled from "styled-components"

const Container = styled.div`
  background-color: var(--bg-primary);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`

`;

const NavContainer = styled.div`
  width: 100%;
  diplay: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
      display: flex;
      column-gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.125rem;
  border: 2px solid transparent;
  border-radius: 3px;
  transition: all 100ms ease;

  &:hover {
      border-bottom: 2px solid var(--fg-primary);
  }
`;

const Main = styled.main`
`;

const HeroSection = styled.section`
  color: white;
  padding: 5rem 0;
  border-block: 1px solid var(--fg-primary);
  width: 100dvw;
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
      animation: changeColor 40s infinite alternate;
  }

  @keyframes changeColor {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }

}
`;

const HeroContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  text-align: center;

  button {
      border: 1px solid var(--fg-primary);
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
  text-shadow: -1px -1px 0 var(--fg-primary), 1px -1px 0 var(--fg-primary), -1px  1px 0 var(--fg-primary), 1px  1px 0 var(--fg-primary);
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  text-shadow: -1px -1px 0 var(--fg-primary), 1px -1px 0 var(--fg-primary), -1px  1px 0 var(--fg-primary), 1px  1px 0 var(--fg-primary);
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

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
`;

const SourcesSection = styled.section`
  padding: 4rem 0;
`;

const SourcesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCard = styled.div`
  overflow: hidden;
  transition: box-shadow 0.3s ease;

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
`;

const FooterTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`

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
            <Header>
                <NavContainer>
                    <Navbar>
                        <Link to="/">EnergyAccess</Link>
                        <ul className="flex space-x-4">
                            <li><NavLink to="#about">Sobre</NavLink></li>
                            <li><NavLink to="#sources">Fontes</NavLink></li>
                            <li><NavLink to="#contact">Contato</NavLink></li>
                        </ul>
                    </Navbar>
                </NavContainer>
            </Header>

            <Main>
                <HeroSection>
                    <HeroContent>
                        <HeroTitle>Acesso Universal à Energia</HeroTitle>
                        <HeroDescription>Explorando fontes de energia sustentáveis para um futuro mais brilhante e acessível a todos.</HeroDescription>
                        <button>
                            Saiba Mais
                        </button>
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
                        <h2>Fontes de Energia</h2>
                        <SourcesGrid>
                            {energySources?.map((source) => (
                                <>
                                    <EnergyCard card={source} />
                                </>
                            ))}
                        </SourcesGrid>
                    </div>
                </SourcesSection>
            </Main>

            <Footer>
                <FooterContainer>
                    <FooterSection>
                        <div>
                            <FooterTitle>EnergyAccess</FooterTitle>
                            <FooterText>Promovendo o acesso universal à energia sustentável.</FooterText>
                        </div>
                        <FooterSection>
                            <h4>Links Rápidos</h4>
                            <FooterLinks>
                                <li><FooterLink to="#about">Sobre</FooterLink></li>
                                <li><FooterLink to="#sources">Fontes de Energia</FooterLink></li>
                                <li><FooterLink to="#contact">Contato</FooterLink></li>
                            </FooterLinks>
                        </FooterSection>
                        <div>
                            <h4>Siga-nos</h4>
                            <FooterIcons>
                                <a href="#"><Sun /></a>
                                <a href="#"><Wind /></a>
                                <a href="#"><Zap /></a>
                            </FooterIcons>
                        </div>
                    </FooterSection>
                    <Copyright>
                        <p>&copy; {new Date().getFullYear()} EnergyAccess. Todos os direitos reservados.</p>
                    </Copyright>
                </FooterContainer>
            </Footer>
        </Container>
    )
}

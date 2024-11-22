import { useCallback, useState } from "react"
import EnergyCard from "../../components/cards/energy-card"
import { fetchEnergies } from "../../api/fetch-energies"
import { Link } from "react-router-dom"
import { TEnergy } from "../../types/energy-type"
import { Earth, HousePlug, Leaf, Sun, Wind, Zap } from "lucide-react"
import useMount from "../../hooks/useMount"
import { Footer, Navbar, NavLink, HeroIcon, AboutText, Container, Copyright, HeroTitle, AboutTitle, FooterIcons, FooterLinks, FooterTitle, HeroContent, HeroSection, SourcesGrid, SourcesText, AboutSection, NavContainer, SourcesTitle, FooterSection, SourcesSection, FooterContainer, HeroDescription } from "./style"

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
                                <Link key={index} to={`energy-source/${source.id}`}>
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
                                <li><Link to="#about">Sobre</Link></li>
                                <li><Link to="#sources">Fontes de Energia</Link></li>
                                <li><Link to="#contact">Contato</Link></li>
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

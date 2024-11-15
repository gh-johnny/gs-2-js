import styled from 'styled-components';
import { TEnergy } from '../../types/energy-type';

const Card = styled.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--bg-accent);
  margin: 0 auto;

  padding: 1.5rem;
  width: 300px;
  transition: all 0.3s ease;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

const CardContent = styled.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  height: 20rem;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div`
 width: 100%;
 height: 100%;
 overflow: hidden;
 border-radius: 8px;
 border: 1px solid var(--bg-accent);

 img {
     width: 100%;
     height: 100%;
     object-fit: cover;
 }
`

const CardSpecs = styled.div`
 display: flex;
 flex-direction: column;
 padding-top: 1rem;

 span {
     font-weight: bold;
 }
`

interface EnergyCardProps {
    card: TEnergy
}

export default function EnergyCard({ card }: EnergyCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardImage>
                    <img src={card.image} />
                </CardImage>
                <CardSpecs>
                    <div>Popularidade: <span>{card.popularity}</span></div>
                    <div>Sustentabilidade: <span>{card.sustainability}</span></div>
                </CardSpecs>
            </CardContent>
        </Card>
    )
}

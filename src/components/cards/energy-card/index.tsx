import { TEnergy } from '../../types/energy-type';
import { Card, CardHeader, CardTitle, CardContent, CardImage, CardSpecs } from './styles';

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

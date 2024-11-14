import styled from 'styled-components';
import { TEnergy } from '../../types/energy-type';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 300px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
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
`;

interface EnergyCardProps {
    card: TEnergy
}

export default function EnergyCard({card} : EnergyCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <button>Action</button>
            </CardHeader>
            <CardContent>
                This is the content of the card. It can contain any type of information or components.
            </CardContent>
        </Card>
    )
}

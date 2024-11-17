import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--bg-accent);
  margin: 0 auto;

  padding: 1.5rem;
  width: 300px;
  transition: all 0.1s ease;

  &:hover {
      scale: 1.03;
      cursor: pointer;
      opacity: .9;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
`;

export const CardContent = styled.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  height: 20rem;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
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
`;

export const CardSpecs = styled.div`
 display: flex;
 flex-direction: column;
 padding-top: 1rem;

 span {
     font-weight: bold;
 }
`;
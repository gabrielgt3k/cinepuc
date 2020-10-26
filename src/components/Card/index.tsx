import React from 'react';
import { Link } from 'react-router-dom';
import { Container, DescriptionContainer } from './styles';

interface CardProps {
  url: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ url, title }: CardProps) => {
  return (
    <Container as={Link} to="/seat">
      <img src={url} alt={title} />
      <DescriptionContainer>
        <strong>{title}</strong>
      </DescriptionContainer>
    </Container>
  );
};

export default Card;

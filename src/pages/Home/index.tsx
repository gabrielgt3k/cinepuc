import React from 'react';
import { Container, CardsContainer, Category, Section } from './styles';
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <Section>
          <Category>LANÇAMENTOS</Category>
          <CardsContainer>
            <Card
              url="https://ingresso-a.akamaihd.net/img/cinema/cartaz/20534-cartaz.jpg"
              title="Os Novos Mutantes"
            />
            <Card
              url="https://ingresso-a.akamaihd.net/img/cinema/cartaz/23848-cartaz.jpg"
              title="Tenet"
            />
            <Card
              url="https://ingresso-a.akamaihd.net/img/cinema/cartaz/23802-cartaz.jpg"
              title="Scooby! - O Filme"
            />
          </CardsContainer>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

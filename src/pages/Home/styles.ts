import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #333;
  color: #888;
  padding-bottom: 2.4rem;
  padding-right: 2.4rem;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Category = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 0.4rem;
  color: #fff;
  margin-bottom: 6rem;
  margin-top: 6rem;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 80vw;
`;

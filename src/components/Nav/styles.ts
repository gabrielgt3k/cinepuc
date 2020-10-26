import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  background-color: #1068af;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8%;
  padding-right: 8%;
`;

export const LogoContainer = styled.div`
  img {
    max-width: 168px;
    height: 90px;

    @media (max-width: 800px) {
      max-width: 105px;
    }
  }

  img:first-child {
    height: 50px;
    margin-bottom: 2rem;
    margin-right: 1.2rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 1.2rem;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
`;

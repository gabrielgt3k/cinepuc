import styled from 'styled-components';

export const Container = styled.a`
  position: relative;
  cursor: pointer;
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30.8rem;
  height: 49.8rem;
  & + a {
    margin-left: 1.6rem;
  }
  img {
    border-radius: 1.4rem;
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.2);
    z-index: 101;
  }
  transition: transform 0.4s;
`;

export const DescriptionContainer = styled.div`
  width: 16.4rem;
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 1.2rem;
  left: 1.2rem;
  strong {
    color: #fff;
    font-weight: bold;
    font-size: 2.2rem;
  }
`;

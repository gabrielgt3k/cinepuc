import styled from 'styled-components';

interface SeatProps {
  isReserved: boolean;
}

export const Container = styled.div`
  height: 90vh;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 80vw;
  margin-top: 8rem;
  h3 {
    color: #fff;
    margin-bottom: 1.8rem;
  }
`;

export const Reservation = styled.div`
  max-width: 60rem;
  width: 48rem;
  min-height: 60rem;
  height: 48rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Seat = styled.button<SeatProps>`
  padding: 1.2rem;
  color: #fff;
  border-radius: 10%;
  border: 4px solid #1068af;
  height: 6.4rem;
  width: 4.4rem;
  flex: 0 0 20%;
  margin-left: 1.2rem;
  cursor: pointer;
  background-color: ${props => (props.isReserved ? '#ffcc00' : '#339900')};
`;

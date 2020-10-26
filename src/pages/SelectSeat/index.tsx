import React, { useState, useCallback, useEffect } from 'react';
import { Container, Section, Reservation, Seat } from './styles';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

interface Seat {
  name: string;
  isReserved: boolean;
}

const SelectSeat: React.FC = () => {
  const [seats, setSeats] = useState<Seat[]>([
    { name: 'A1', isReserved: false },
    { name: 'A2', isReserved: false },
    { name: 'A3', isReserved: false },
    { name: 'A4', isReserved: false },
    { name: 'A5', isReserved: false },
    { name: 'A6', isReserved: false },
    { name: 'B1', isReserved: false },
    { name: 'B2', isReserved: false },
    { name: 'B3', isReserved: false },
    { name: 'B4', isReserved: false },
    { name: 'B5', isReserved: false },
    { name: 'B6', isReserved: false },
    { name: 'C1', isReserved: false },
    { name: 'C2', isReserved: false },
    { name: 'C3', isReserved: false },
    { name: 'C4', isReserved: false },
    { name: 'C5', isReserved: false },
    { name: 'C6', isReserved: false },
  ]);

  const selectSeat = useCallback(
    (index: number) => {
      const seatsCopy = seats;
      seatsCopy[index].isReserved = !seatsCopy[index].isReserved;
      setSeats([...seatsCopy]);
    },
    [seats],
  );
  return (
    <>
      <Nav />
      <Container>
        <Section>
          <h3>Selecione um assento</h3>
          <Reservation>
            {seats.map((seat, index) => (
              <Seat
                key={[seat.name, index].join('_')}
                type="button"
                onClick={() => selectSeat(index)}
                isReserved={seat.isReserved}
              >
                {seat.name}
              </Seat>
            ))}
          </Reservation>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default SelectSeat;

import { TripContext } from './TripContext';
import { useContext } from 'react';

export const useTripContext = () => {
  const context = useContext(TripContext);

  if (!context) {
    throw Error('useTrip must be used inside a TripContextProvider')
  }
  return context;
}
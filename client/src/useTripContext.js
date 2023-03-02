import { TripContext } from './TripContext';
import { useContext } from 'react';

export const useTripContext = () => {
  const context = useContext(TripContext);

  if (!context) {
    throw Error('useWorkout must be used inside a TripContextProvider')
  }
  return context;
}
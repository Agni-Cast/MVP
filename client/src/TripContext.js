import { createContext, useReducer } from 'react';

export const TripContext = createContext();

export const tripReducer = (state, action) => {
  switch(action.type) {
    case 'SET TRIP':
      return {
        trip: action.payload
      }
    default:
      return state;
  }
}

export const TripContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tripReducer, {
    trip: null
  });

  return (
    <TripContext.Provider value={{...state, dispatch}}>
      { children }
    </TripContext.Provider>
  )
}
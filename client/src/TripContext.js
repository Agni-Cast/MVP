import { createContext, useReducer } from 'react';

export const TripContext = createContext();

export const tripReducer = (state, action) => {
  switch(action.type) {
    case 'SET TRIP':
      return {
        trip: action.payload
      }
    case 'CREATE_TRIP':
      return {
        trips: [action.payload, {...state.trip}]
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
import { useAuthContext } from './useAuthContext'
import { useTripContext} from './useTripContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: tripDispatch } = useTripContext();

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' })
    tripDispatch({ type: 'SET TRIP', payload: null})
  }
  return { logout }
}
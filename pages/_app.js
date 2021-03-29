import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Login from './login'


function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth) // checks for user

  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp

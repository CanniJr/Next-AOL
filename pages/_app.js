import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import Login from './login'
import Loading from '../components/Loading'


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth) // checks for user

  if (true) return <Loading />
  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp

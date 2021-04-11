import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)  // Shows Google login popup
        .catch(alert)
    }

    return (
        <Container>
            <Head>
               <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png' />
                
                <Button onClick={signIn} variant='outlined'>Sign In</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`

const Head = styled.div``

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 8px 4px 14px -3px rgba(0, 0, 0, 0.7);

`

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px
`

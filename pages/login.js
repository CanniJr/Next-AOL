import styled from 'styled-components'
import {Button} from '@material-ui/core'


function Login() {
    return (
        <Container>
            <Head>
               <h1>Login</h1>
            </Head>

            <LoginContainer>
                <Logo src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png' />
                
                <Button variant='outlined'>Sign In</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div``

const Head = styled.div``

const LoginContainer = styled.div``

const Logo = styled.img``

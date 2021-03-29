import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Head>
               <h1>Login</h1>
            </Head>

            <LoginContainer>
                <Logo />
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div``

const Head = styled.div``

const LoginContainer = styled.div``

const Logo = styled.img``
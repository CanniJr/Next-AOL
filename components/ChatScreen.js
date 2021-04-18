import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components'
import { auth } from '../firebase'

function ChatScreen({ chat, messages }) {
    const [user] = useAuthState(auth);
    const router = useRouter();

    return (
        <Container>
            <h1>Chat Screen</h1>
        </Container>
    )
}

export default ChatScreen

const Container = styled.div`

`

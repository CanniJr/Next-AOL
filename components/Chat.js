import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import getRecipientEmail from '../utilities/getRecipientEmail'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

function Chat({ id, users }) {
    const [user] =  useAuthState(auth)
    const [recipientSnapshot] = useCollection(db.collection('users').where('email', '==', getRecipientEmail(users, user)))

    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = getRecipientEmail(users, user)

    return (
        <Container>
            {recipient ? (
                <UserAvatar src={recipient?.photoUrl} />
            )}
            <UserAvatar />
            <p>{recipientEmail}</p>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover {
        background-color: lightgray;
    }

`
const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`
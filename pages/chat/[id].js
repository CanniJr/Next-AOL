import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import ChatScreen from '../../components/ChatScreen'
import { db } from '../../firebase'

function Chat() {
    return (
        <Container>
            <Head>
                <title>Chat</title>
             </Head>
             <Sidebar/>
             <ChatContainer>
                <ChatScreen />
             </ChatContainer>
        </Container>
    )
}

export default Chat

export async function getServerSideProps(context){
    const ref = db.collection('chats').doc(context.query.id);

    //Prep the messages on the server side
    const messageRes = await ref
        .collection('messages')
        .orderBy('timestamp', 'asc') // order by timestamp ascending
        .get();

        const messages = messageRes.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })).map(messages => ({
            ...messages,
            timestamp: messages.timestamp.toDate().getTime(),
        }));
}

const Container = styled.div`
    display: flex;
`;


const ChatContainer = styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  //IE and Edge
    scrollbar-width: none   //Firefox 
    
`
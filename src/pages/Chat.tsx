import { HStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';

function Chat() {
  return (
    <div>
      <Header />
      <HStack
        as='main'
        pt='8'
        px='3'
        alignItems='stretch'
        minH='calc(100vh - 62px)'
        borderColor='indigo.500'
        borderWidth='1px'
        columnGap='7'
      >
        <Sidebar />
        <ChatContainer />
      </HStack>
    </div>
  );
}

export default Chat;

import { Box, HStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

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
      >
        <Sidebar />
        <Box w='full'>Chat</Box>
      </HStack>
    </div>
  );
}

export default Chat;

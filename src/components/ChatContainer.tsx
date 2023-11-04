import { Box, Heading, Text } from '@chakra-ui/react';

function ChatContainer() {
  return (
    <Box fontSize='xs'>
      <Box
        w='750px'
        h='88px'
        py='4'
        px='8'
        borderColor='neutral.400'
        borderWidth='1px'
        boxShadow='0px 0px 1px #171a1f, 0px 0px 2px #171a1'
      >
        <Heading fontSize='md' fontWeight='bold'>
          Introduce yourself to AIWorkSquad
        </Heading>
        <Text mt='4'>I'm Nithin, CEO of an IT startup company in India</Text>
      </Box>
    </Box>
  );
}

export default ChatContainer;

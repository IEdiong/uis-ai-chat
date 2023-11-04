import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { HistoryIcon } from './icons';
import HistoryItem from './HistoryItem';

function Sidebar() {
  return (
    <Box
      as='aside'
      display='block'
      h='576px'
      flexShrink='0'
      pt='4'
      px='1.5'
      borderRadius='base'
      boxShadow='0px 0px 1px #171a1f, 0px 0px 2px #171a1f'
      fontSize='12px'
      lineHeight='20px'
      color='neutral.900'
    >
      <Box
        as='button'
        textTransform='capitalize'
        alignItems='flex-start'
        px='69px'
        py='9px'
        borderColor='#8191C9FF'
        outline='none'
        borderWidth='1px'
        borderRadius='2px'
      >
        <Text as='span' color='#8191C9FF'>
          + New chat
        </Text>
      </Box>
      <HStack mt='4' justify='center' rowGap='14px'>
        <HistoryIcon boxSize='20px' />
        <Text>History</Text>
      </HStack>
      <VStack mt='4' align='stretch' gap='2'>
        {[1, 2, 3].map((idx: number) => (
          <HistoryItem key={idx} />
        ))}
      </VStack>
    </Box>
  );
}

export default Sidebar;

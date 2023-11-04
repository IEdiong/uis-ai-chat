import { HStack, Tooltip, Text } from '@chakra-ui/react';
import { ChatIcon, DeleteIcon, LineEditIcon } from './icons';

function HistoryItem() {
  return (
    <HStack
      as='button'
      px='1'
      py='2'
      gap='4'
      align='center'
      _hover={{
        bg: 'gray.100',
      }}
    >
      <ChatIcon boxSize='12px' flexShrink='0' />
      <Tooltip
        hasArrow
        label='Give me a list of marketing agencies near me in 5km'
        bg='white'
        color='inherit'
        border='1px'
        px='2'
        w='200px'
        placement='bottom'
      >
        <Text w='115px' textAlign='left' noOfLines={1}>
          Give me a list of marketing agencies near me in 5km
        </Text>
      </Tooltip>
      <LineEditIcon boxSize='12px' />
      <DeleteIcon boxSize='12px' />
    </HStack>
  );
}

export default HistoryItem;

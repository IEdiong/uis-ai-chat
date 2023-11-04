import { Box, HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.png';

function Header() {
  return (
    <Box
      bg='primary.600'
      px='3'
      py='1.5'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box
        w='241px'
        h='50px'
        py='1'
        px='10px'
        borderRadius='base'
        border='1px'
        borderColor='black'
        bg='primary.100'
        overflow='hidden'
        pos='relative'
      >
        <Image
          src={Logo}
          alt='logo'
          objectFit='cover'
          pos='absolute'
          left='50%'
          top='50%'
          transform='translate(-50%, -50%)'
        />
      </Box>
      <HStack>
        <Box>
          <Text>Department: Marketing</Text>
        </Box>
      </HStack>
    </Box>
  );
}

export default Header;

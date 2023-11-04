import { Box, HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.png';
import { UserIcon } from './icons';

function Header() {
  return (
    <Box
      as='header'
      bg='primary.600'
      px='3'
      py='1.5'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      borderBottomRadius='base'
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
        boxShadow='xl'
      >
        <Image
          src={Logo}
          alt='logo'
          w='220px'
          objectFit='cover'
          pos='absolute'
          left='50%'
          top='50%'
          transform='translate(-50%, -50%)'
        />
      </Box>
      <HStack marginInlineEnd='46px'>
        <Box
          bg='white'
          py='9px'
          px='53px'
          borderRadius='md'
          border='2px'
          borderColor='neutral.900'
        >
          <Text
            fontWeight='bold'
            fontSize='11px'
            lineHeight='18px'
            color='neutral.900'
          >
            Department: Marketing
          </Text>
        </Box>
        <HStack as='button'>
          <UserIcon boxSize='20px' />
          <Text fontSize='11px' lineHeight='18px' color='white'>
            Nithin
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;

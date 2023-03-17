import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/hooks';
import { Button, Box, Flex } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex mr={500}>
      <Box mr={5}>
        <Button colorScheme="teal" variant="solid">
          <NavLink to="/">Home</NavLink>
        </Button>
      </Box>

      {isLoggedIn && (
        
        <Button rightIcon={<PhoneIcon />} colorScheme="blue" variant="outline">
          <NavLink to="/contacts">Contacts</NavLink>
          </Button>
          
      )}
    </Flex></nav>
  );
};

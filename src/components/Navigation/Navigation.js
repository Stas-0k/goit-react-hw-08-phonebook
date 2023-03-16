import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/hooks';
import { Button } from '@chakra-ui/react';
import { PhoneIcon  } from '@chakra-ui/icons'


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Button colorScheme="teal" variant="solid">
        <NavLink to="/">Home</NavLink>
      </Button>

      {isLoggedIn && (
        <Button rightIcon={<PhoneIcon />} colorScheme='blue' variant='outline'>
          <NavLink to="/contacts">Contacts</NavLink>
        </Button>
      )}
    </nav>
  );
};

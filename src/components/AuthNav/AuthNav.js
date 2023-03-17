import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react'

export const AuthNav = () => {
  return (
    <div>
      <Button colorScheme='teal' variant='outline' mr={5}><NavLink to="/register">Register</NavLink></Button>
      <Button colorScheme='teal' variant='outline'><NavLink to="/login">Log in</NavLink></Button>
    </div>
  );
};

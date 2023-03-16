import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/hooks';
import { Button, Text } from '@chakra-ui/react';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Text as='ins' fontSize='20px' color='teal'>Hi, {user.name}!</Text>
      <Button colorScheme="red" variant="outline" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};

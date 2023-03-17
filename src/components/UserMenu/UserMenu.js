import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/hooks';
import { Button, Text, Flex } from '@chakra-ui/react';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex>
      <Text as='ins' fontSize='20px' color='teal' mr={5}>Hi, {user.name}!</Text>
      <Button colorScheme="red" variant="outline" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};

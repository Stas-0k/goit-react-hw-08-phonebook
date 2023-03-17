import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/hooks';
import { Flex } from '@chakra-ui/react'

export function AppBar() {

  const { isLoggedIn } = useAuth();
  

  return (
    <header>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Navigation/>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}   
      </Flex>  
    </header>
  );
}

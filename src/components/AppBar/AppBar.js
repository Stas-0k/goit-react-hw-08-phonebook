import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/hooks';

export function AppBar() {

  const { isLoggedIn } = useAuth();
  

  return (
    <header>
      <Navigation/>
      {isLoggedIn ? <UserMenu/> : <AuthNav />}      
    </header>
  );
}

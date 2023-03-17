import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Button, Input, Text } from '@chakra-ui/react';


export const LoginForm = () => {

    const dispatch = useDispatch()
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget

        dispatch(
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }



  return (
    <div>
      <Text fontSize='xl' color='teal' mt={5}>Welcome to Login page!</Text>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          
          <Input
            variant="flushed"
            placeholder="E-mail"
            type="email"
            name="email"
            mb={5}
          ></Input>
        </label>

        <label>
          
          <Input
            variant="flushed"
            placeholder="Password"
            type="password"
            name="password"
          ></Input>
        </label>

        <Button colorScheme="teal" variant="outline"
           type="submit" mt={10}>Log in
        </Button>
      </form>
    </div>
  );
};

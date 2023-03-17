import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button, Input, Text } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Text fontSize='xl' color='teal' mt={5}>Welcome to registration form!</Text>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <Input
            variant="flushed"
            placeholder="Name"
            type="text"
            name="name"
            mb={5}
          ></Input>
        </label>

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
           type="submit" mt={10}>Register
        </Button>
      </form>
    </div>
  );
};

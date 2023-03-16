import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button, Input, Text } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form.elements.email.value);
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
      <Text fontSize='xl' color='teal'>Welcome to registration form!</Text>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <Input
            variant="flushed"
            placeholder="Name"
            type="text"
            name="name"
          ></Input>
        </label>

        <label>
          <Input
            variant="flushed"
            placeholder="E-mail"
            type="email"
            name="email"
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
           type="submit">Register
        </Button>
      </form>
    </div>
  );
};

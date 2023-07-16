'use client';

import { AuthContext } from '@/contexts/AuthContext';
import { Avatar, Button, Container, Flex, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  email: string;
  senha: string;
}


export default function Home() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { login } = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormInput> = async ({ email, senha }) => {
    await login(email, senha);
  }

  return (
    <Container as='main'>
      <Flex textAlign={'center'} flexDirection={'column'} gap={6}>
        <Text as='h1' fontSize='6xl'> Bem vindo!</Text>
        <Avatar name='Gato' src='/gato-programando.jpg' alignSelf={'center'} size={'2xl'} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack gap={4}>

            <FormControl>
              <FormLabel>
                Email:
              </FormLabel>
              <Input type='email' {...register('email')} />
            </FormControl>

            <FormControl>
              <FormLabel>
                Senha:
              </FormLabel>
              <Input type='password' {...register('senha')} />
            </FormControl>

            <Button colorScheme='pink' type='submit' width={'100%'}>Login</Button>

          </VStack>
        </form>

        <Link href={'/authArea'}>Área privada 👀</Link>
      </Flex>
    </Container>

  )
}


'use client';

import { Avatar, Button, Container, Flex, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container as='main'>
      <Flex textAlign={'center'} flexDirection={'column'} gap={6}>
        <Text as='h1' fontSize='6xl'> Bem vindo!</Text>
        <Avatar name='Gato' src='/gato-programando.jpg' alignSelf={'center'} size={'2xl'}/>
        <form>
          <VStack gap={4}>
            <FormControl>
              <FormLabel>
                Email:
              </FormLabel>
              <Input type='email' />
            </FormControl>

            <FormControl>
              <FormLabel>
                Senha:
              </FormLabel>
              <Input type='password' />
            </FormControl>

            <Button colorScheme='pink' type='submit' width={'100%'}>Login</Button>

          </VStack>
        </form>
      </Flex>
    </Container>

  )
}


'use client';

import { Button, Container, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function authArea() {
    const router = useRouter();

    function handlerClick () {

    }

    return (
        <>
            <Container
                height={'100vh'}
                display={'flex'}
                justifyContent={'center'}
                flexDirection={"column"}
                alignItems={"center"}
            >
                <VStack gap={4}>
                    <Text as='h1' fontSize='4xl' textAlign={"center"}>
                        Parabéns!! <br />
                        Você conseguiu realizar o login
                    </Text>
                    <Image
                        src='/cat-smile.jpg'
                        alt='gato sorrindo'
                        width={200}
                        height={200}
                    />
                    <Button colorScheme="pink" onClick={handlerClick}>Sair</Button>
                    <Button colorScheme="purple" onClick={() => router.push('/')}>◀️ Voltar</Button>
                </VStack>
            </Container>
        </>
    );
}
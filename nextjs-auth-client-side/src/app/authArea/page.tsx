'use client';

import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"
import styles from './styles.module.css';

export default function authArea() {
    return (
        <>
            <Container
                height={'100vh'}
                display={'flex'}
                alignItems={'center'}
            >
                <Text as='h1' fontSize='5xl' textAlign={"center"}>
                    Parabéns!! <br />
                    Você conseguiu realizar o login
                </Text>
            </Container>
        </>
    );
}
'use client';

import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"
import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function authArea() {
    const { isAutenticado } = useContext(AuthContext);
    const [hasAcesso, setHasAcesso] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (!isAutenticado()) {
            router.push('/');
        } else {
            setHasAcesso(true);
        }
    }, []);

    return (hasAcesso &&
        <>
            <Container
                height={'100vh'}
                display={'flex'}
                justifyContent={'center'}
                flexDirection={"column"}
                alignItems={"center"}
            >
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
            </Container>
        </>
    );
}
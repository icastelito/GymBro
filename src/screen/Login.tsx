import React from "react";
import { VStack, Text, Box, FormControl, Input, Button, Link } from "native-base";
import { TouchableOpacity } from "react-native";
import Title from "../components/Title";

export default function Login() {
        return (
                <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
                        <Title> Faça Login para acessar </Title>
                        <Box>
                                <FormControl mt={3}>
                                        <FormControl.Label> Email </FormControl.Label>
                                        <Input placeholder="example@gmail.com" size='lg' w="100%" borderBottomRadius="lg" bgColor='gray.200' shadow={3} />
                                </FormControl>
                        </Box>
                        <Box>
                                <FormControl mt={3}>
                                        <FormControl.Label> Senha </FormControl.Label>
                                        <Input placeholder="insira sua senha" size='lg' w="100%" borderBottomRadius="lg" bgColor='gray.200' shadow={3} />
                                </FormControl>
                        </Box>
                        <Button mt={5} bg="blue.800" w="100%" size="lg" shadow={3}> Entrar </Button>
                        <Link mt={5} href="https://gcteste.gcweb.app.br/auth/login" isUnderlined={false}> Esqueceu sua senha? </Link>
                        <Box w="100%" textAlign="center" flex="1" flexDirection="row" justifyContent="center">
                                <Text mt={5}> Não tem uma conta?</Text>
                                <TouchableOpacity>
                                        <Text mt={5} color="blue.700"> Registre-se</Text>
                                </TouchableOpacity> 
                        </Box>

                </VStack>
        );
}
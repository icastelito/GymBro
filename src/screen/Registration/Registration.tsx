import React from "react";
import { VStack, Text, Box, FormControl, Input, Button, Link } from "native-base";
import GBTextEnter from "../../components/GBTextEnter";
import GBButton from "../../components/GBButton";
import Title from "../../components/Title";

export default function Registration() {
        
        const section = [
                {
                        id: 1,
                        title: "Insira alguns dados básicos",
                        enterText:[

                                {
                                        id:1,
                                        label: 'Nome',
                                        placeholder: 'Insira seu nome',
                                },
                                {
                                        id:2,
                                        label: 'E-mail',
                                        placeholder: 'Digite seu e-mail',
                                }

                        ] 
                },
        ];
        

        return (
                <>
                <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
                <Title> Faça Login para acessar </Title>
                      
                        <Box w="100%" textAlign="center" flex="1"  justifyContent="center">
                                {
                                        section[0].enterText.map((item) => (
                                                <GBTextEnter label={item.label} placeholder={item.placeholder} key={item.id}/>
                                        ))
                                }
                        </Box>
                        <GBButton>Continuar</GBButton>


                </VStack>
                </>
        );
}
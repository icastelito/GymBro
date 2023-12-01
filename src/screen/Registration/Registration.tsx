import React from "react";
import { VStack, Text, Box, FormControl, Input, Button, Link, Checkbox , ScrollView} from "native-base";
import GBTextEnter from "../../components/GBTextEnter";
import GBButton from "../../components/GBButton";
import Title from "../../components/Title";
import { Section } from "../../utils/subscribeTextEnter";
import { useState } from 'react';

export default function Registration() {
        const [numSections, setNumSections] = useState(0);
        function addSection() {
                setNumSections(numSections < Section.length - 1? numSections + 1 : numSections);
        }


        

        return (
                <>
                <ScrollView flex={1} p={5}>
                <Title> {Section[numSections].title} </Title>
                      
                        <Box w="100%" textAlign="center"  justifyContent="center">
                                {
                                        Section[numSections]?.textInput.map((item) => (
                                                <GBTextEnter label={item.label} placeholder={item.placeholder} key={item.id}/>
                                        ))
                                }
                        </Box>
                        <Box w="100%" textAlign="center" justifyContent="center">
                                {
                                        Section[numSections]?.checkbox.map((item) => (
                                                <Checkbox key={item.id} value={item.value}>{item.value} </Checkbox>
                                        ))
                                }
                        </Box>
                        {numSections > 0 && <GBButton onPress={()=> setNumSections(numSections - 1)} bgColor="gray.400">Voltar</GBButton>}
                        <GBButton onPress={()=> addSection()}  mt={4} mb={20} >Continuar</GBButton>


                </ScrollView>
                </>
        );
}
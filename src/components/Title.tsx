import { Image, Text, ITextProps, Center } from 'native-base';
import Logo from '../assets/Logo.png';
import { ReactNode } from 'react';

interface TitleProps extends ITextProps {
        children: ReactNode;
}

export default function Title({ children, ...rest }: TitleProps) {
        return (

                <>
                        <Image source={Logo} alt="Logo" alignSelf="center"/>
                        <Text fontSize="2xl" fontWeight="bold" color="gray.500" textAlign="center" mt={5} {...rest}>
                                {children}
                        </Text>

                </>

        )
}
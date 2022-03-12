import { Image, Flex, Button, HStack, chakra, useColorMode, Text } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                px="6"
                py="2"
                align="center"
                justify="space-between"
                backgroundColor='teal'
            >

                <HStack as="nav" spacing="5">
                    <Text fontSize="lg" fontWeight="bold" color="white">
                        TRANSLATOR
                    </Text>
                    {/* {data.map((item, i) => (
                        <Link key={i}>
                            <Button variant="nav"> {item.label} </Button>
                        </Link>
                    ))} */}
                </HStack>

                <HStack>
                    <Button onClick={toggleColorMode} backgroundColor='transparent'>
                        {colorMode === 'light' ? <>Dark <MoonIcon mx={2} /> </> : <>Light <SunIcon mx={2}
                        /></>}
                    </Button>
                </HStack>

            </Flex>
        </chakra.header>
    )
}
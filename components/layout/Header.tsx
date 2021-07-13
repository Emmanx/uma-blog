import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  useBoolean
} from '@chakra-ui/react'

import { Menu } from './Menu'
import { MobileMenu } from './MobileMenu'
import React from 'react'
import { Social } from './Social'

export const Header: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useBoolean()

  return (
    <Box>
      <Container>
        <Flex justify="space-between" align="center" py="5rem">
          <Image w={{ base: '8rem', lg: '10.3rem' }} src="/images/logo.svg" />
          <Social />
          <Button borderRadius="3.5rem" variant="outline" display={{ base: 'none', lg: 'flex' }}>
            UMAverse
          </Button>
          <Image
            display={{ base: 'block', lg: 'none' }}
            w="8rem"
            src="/icons/ham.svg"
            onClick={setMobileMenu.on}
          />
          {mobileMenu && <MobileMenu close={setMobileMenu.off} />}
        </Flex>
      </Container>
      <Box
        w="100%"
        borderTop="1px solid #EDF2F7"
        borderBottom="1px solid #EDF2F7"
        py="2.5rem"
        display={{ base: 'none', lg: 'flex' }}>
        <Container>
          <Flex justify="space-between" align="center">
            <HStack spacing="1.3rem">
              <Text color="brand.red" fontSize="1.6rem">
                SuperUMANs
              </Text>
              <Image src="/icons/chevron-right.svg" />
            </HStack>
            <Menu />
            <HStack spacing="2rem">
              <Image w="2rem" src="/icons/search.svg" />
              <Input
                placeholder="Search blog..."
                fontSize="1.4rem"
                color="#718096"
                w="10rem"
                h="4rem"
                border="none"
                _focus={{
                  border: 'none'
                }}
              />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

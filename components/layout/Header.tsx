import { Box, Button, Container, Flex, HStack, Image, Text, useBoolean } from '@chakra-ui/react'

import { AnimatePresence } from 'framer-motion'
import { Menu } from './Menu'
import { MobileMenu } from './MobileMenu'
import NextLink from 'next/link'
import React from 'react'
import { Search } from './Search'
import { Social } from './Social'
import { TNavigation } from '../../types/layout'

type Props = {
  navigation: TNavigation[]
}

export const Header = ({ navigation }: Props) => {
  const [mobileMenu, setMobileMenu] = useBoolean()

  return (
    <Box>
      <Container>
        <Flex justify="space-between" align="center" py="5rem">
          <NextLink href="/">
            <a>
              <Image w={{ base: '8rem', lg: '10.3rem' }} src="/images/logo-dark.png" />
            </a>
          </NextLink>
          <Social />
          <Button
            borderRadius="3.5rem"
            variant="outline"
            display={{ base: 'none', lg: 'flex' }}
            as="a"
            target="blank"
            href="https://projects.umaproject.org">
            UMAverse
          </Button>
          <Image
            display={{ base: 'block', lg: 'none' }}
            w="8rem"
            src="/icons/ham.svg"
            onClick={setMobileMenu.on}
          />
          <AnimatePresence>
            {mobileMenu && <MobileMenu navigation={navigation} close={setMobileMenu.off} />}
          </AnimatePresence>
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
              <Text
                color="brand.red"
                fontSize="1.6rem"
                as="a"
                target="blank"
                href="https://discord.gg/Ev5nTXakNJ">
                Become a SuperUMAn
              </Text>
              <Image src="/icons/chevron-right.svg" />
            </HStack>
            <Menu navigation={navigation} />
            <Search />
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

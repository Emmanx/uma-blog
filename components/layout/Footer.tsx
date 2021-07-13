import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'

import { FOOTER_COLS } from '../../config/routes'
import NextLink from 'next/link'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <Box w="100%" bg="#000" py="5.5rem" mt="7rem">
      <Container>
        <DesktopFooter />
        <MobileFooter />
        <Flex justify="center" mt="8.5rem">
          <Box textAlign="center">
            <Image w="12.5rem" src="/images/logo.svg" mx="auto" />
            <Text color="#fff" opacity="0.75rem" mt="7px" fontSize="1.6rem">
              © 2020 UMA Protocol. All rights reserved.
            </Text>
            <HStack mt="1rem" spacing="3.2rem" justify="center">
              <Image src="/icons/discord-white.svg" w="2.5rem" />
              <Image src="/icons/twitter-white.svg" w="2.5rem" />
              <Image src="/icons/discuss-white.svg" w="2.5rem" />
              <Image src="/icons/github-white.svg" w="2.5rem" />
              <Image src="/icons/youtube-white.svg" w="2.5rem" />
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

const DesktopFooter = () => {
  return (
    <Flex justify="center" wrap="wrap" display={{ base: 'none', lg: 'flex' }}>
      {FOOTER_COLS.map((item, i) => (
        <FooterCol heading={item.heading} links={item.links} key={i} />
      ))}
    </Flex>
  )
}

type FooterColProps = {
  heading: string
  links: string[]
}

const FooterCol: (props: FooterColProps) => JSX.Element = ({ heading, links }) => {
  return (
    <Box color="#fff" mb="5rem" mx="2rem">
      <Heading fontSize="1.8rem">{heading}</Heading>
      <VStack mt="4rem" align="flex-start" spacing="2rem">
        {links.map((item, i) => (
          <NextLink href={item} key={i}>
            <Link opacity="0.75">{item}</Link>
          </NextLink>
        ))}
      </VStack>
    </Box>
  )
}

const MobileFooter = () => {
  return (
    <Box display={{ base: 'block', lg: 'none' }} color="#fff">
      <Accordion>
        {FOOTER_COLS.map((item, i) => (
          <AccordionItem key={i} border="none">
            <h2>
              <AccordionButton py="2rem">
                <Box flex="1" textAlign="left" fontFamily="headingBold" fontSize="1.6rem">
                  {item.heading}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing="2rem" align="flex-start">
                {item.links.map((link, i) => (
                  <NextLink href={link} key={i}>
                    <Link opacity="0.75">{link}</Link>
                  </NextLink>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

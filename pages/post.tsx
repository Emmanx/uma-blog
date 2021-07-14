import { Box, Container, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'

import React from 'react'

const post = () => {
  return (
    <Box mt="10rem">
      <Container maxW="82rem">
        <HStack fontSize="1.6rem" spacing="3.5rem">
          <Text textTransform="uppercase" color="brand.red">
            Community
          </Text>
          <Text>June 30, 2021</Text>
        </HStack>
        <Heading
          as="h1"
          fontSize={{ base: '2.8rem', md: '4.8rem' }}
          fontWeight="400"
          mt="5px"
          lineHeight={{ base: '3.85rem', md: '6.6rem' }}
          fontFamily="Halyard Display SemiBold">
          Start here for a quick overview of everything you need to know
        </Heading>
        <Text fontSize={{ base: '1.4rem', md: '1.6rem' }} color="#425466" mt="1.2rem">
          We&apos;ve crammed the most important information to help you get started with UMA Theme
          into this one post. It&apos;s your cheat-sheet to get started, and your shortcut to
          advanced features.
        </Text>
      </Container>
      <Image src="/images/post.png" my="5rem" />
      <Container maxW="82rem">
        <Heading as="h1" fontSize="2.4rem" fontWeight="400" mt="5px" lineHeight="3.6rem">
          Page Title
        </Heading>
        <Text fontSize={{ base: '1.4rem', md: '1.6rem' }} color="#425466" mt="1.2rem">
          We&apos;ve crammed the most important information to help you get started with UMA Theme
          into this one post. It&apos;s your cheat-sheet to get started, and your shortcut to
          advanced features.
        </Text>

        <Box w="100%" h="1px" bg="#EDF2F7" my="4rem" />

        <Flex
          justify={{ base: 'center', md: 'space-between' }}
          align="center"
          flexDir={{ base: 'column', md: 'row' }}>
          <HStack spacing={{ base: '0', md: '2.2rem' }} flexDir={{ base: 'column', md: 'row' }}>
            <Image src="/images/author.png" w="5rem" h="5rem" borderRadius="50%" />
            <Text fontSize="1.6rem">UMA Protocol</Text>
          </HStack>
          <HStack spacing="2.2rem" mt={{ base: '4.5rem', md: '0' }}>
            <Text fontSize="1.6rem">Share:</Text>
            <HStack spacing="2rem">
              <IconBox icon="/icons/youtube-white.svg" />
              <IconBox icon="/icons/discord-white.svg" />
              <IconBox icon="/icons/discord-white.svg" />
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default post

type IconBoxProps = {
  icon: string
}

const IconBox = ({ icon }: IconBoxProps) => {
  return (
    <Flex justify="center" align="center" w="5rem" h="5rem" bg="#000" borderRadius="50%">
      <Image src={icon} />
    </Flex>
  )
}

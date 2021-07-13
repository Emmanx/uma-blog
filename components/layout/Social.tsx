import { HStack, Image } from '@chakra-ui/react'

import React from 'react'

export const Social: React.FC = () => {
  return (
    <HStack display={{ base: 'none', lg: 'flex' }} spacing="5.5rem">
      <Image w="2rem" src="/icons/globe.svg" />
      <Image w="2rem" src="/icons/doc.svg" />
      <Image w="2rem" src="/icons/youtube.svg" />
      <Image w="2rem" src="/icons/discord.svg" />
      <Image w="2rem" src="/icons/discuss.svg" />
      <Image w="2rem" src="/icons/twitter.svg" />
    </HStack>
  )
}

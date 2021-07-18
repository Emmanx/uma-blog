import { HStack, Image } from '@chakra-ui/react'

import React from 'react'
import { SOCIALS } from '../../config/routes'

export const Social: React.FC = () => {
  return (
    <HStack display={{ base: 'none', lg: 'flex' }} spacing="5.5rem">
      {SOCIALS.map((item, i) => (
        <a target="blank" key={i} href={item.url}>
          <Image w="2rem" src={`/icons/${item.icon}.svg`} />
        </a>
      ))}
    </HStack>
  )
}

import { HStack, Link } from '@chakra-ui/react'

import NextLink from 'next/link'
import { ROUTES } from '../../config/routes'
import React from 'react'

export const Menu: React.FC = () => {
  return (
    <HStack display={{ base: 'none', lg: 'block' }} spacing="3.2rem">
      {ROUTES.map((route, i) => (
        <NextLink href={route.path} key={i}>
          <Link fontSize="1.6rem">{route.name}</Link>
        </NextLink>
      ))}
    </HStack>
  )
}

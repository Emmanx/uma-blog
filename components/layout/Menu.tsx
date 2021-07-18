import { HStack, Link } from '@chakra-ui/react'

import NextLink from 'next/link'
import React from 'react'
import { TNavigation } from '../../types/layout'

type Props = {
  navigation: TNavigation[]
}

export const Menu = ({ navigation }: Props) => {
  return (
    <HStack display={{ base: 'none', lg: 'block' }} spacing="3.2rem">
      {navigation.map((item, i) => (
        <NextLink href={item.url} key={i}>
          <Link fontSize="1.6rem">{item.label}</Link>
        </NextLink>
      ))}
    </HStack>
  )
}

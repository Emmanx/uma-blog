import { HStack, Link } from '@chakra-ui/react'

import React from 'react'
import { TNavigation } from '../../types/layout'

type Props = {
  navigation: TNavigation[]
}

export const Menu = ({ navigation }: Props) => {
  console.log(navigation)
  return (
    <HStack display={{ base: 'none', lg: 'block' }} spacing="3.2rem">
      {navigation.map((item, i) => (
        <Link href={item.url} key={i} fontSize="1.6rem">
          {item.label}
        </Link>
      ))}
    </HStack>
  )
}

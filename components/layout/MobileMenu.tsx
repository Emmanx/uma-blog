import { Flex, HStack, Image, Link, VStack } from '@chakra-ui/react'

import NextLink from 'next/link'
import React from 'react'
import { Search } from './Search'
import { TNavigation } from '../../types/layout'
import { motion } from 'framer-motion'

type Props = {
  close: () => void
  navigation: TNavigation[]
}

export const MobileMenu = ({ close, navigation }: Props) => {
  return (
    <motion.div
      initial={{
        x: '100%'
      }}
      animate={{
        x: '0'
      }}
      exit={{
        x: '100%'
      }}
      transition={{
        duration: 1
      }}
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        background: '#fff',
        padding: '5rem 3rem'
      }}>
      <Flex justify="flex-end">
        <Image w="8rem" src="/icons/ham-close.svg" onClick={close} />
      </Flex>
      <HStack mt="3.5rem">
        <Search />
      </HStack>
      <VStack spacing="3rem" align="flex-start" mt="4.5rem">
        {navigation.map((route, i) => (
          <NextLink href={route.url} key={i}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link onClick={close} fontSize="1.4rem">
              {route.label}
            </Link>
          </NextLink>
        ))}
      </VStack>
    </motion.div>
  )
}

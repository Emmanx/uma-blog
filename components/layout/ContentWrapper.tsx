import { Container } from '@chakra-ui/layout'
import React from 'react'

export const ContentWrapper: React.FC = ({ children }) => {
  return <Container maxW="100rem">{children}</Container>
}

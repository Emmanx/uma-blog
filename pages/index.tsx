import { Box, Flex } from '@chakra-ui/react'
import { ContentWrapper, PageTitle, PostCard, PostCardWide } from '../components/layout'

import Head from 'next/head'
import React from 'react'

const Home: React.FC = () => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <PageTitle />
      <ContentWrapper>
        <PostCardWide />
        <Flex mt="7rem">
          <PostCard />
        </Flex>
      </ContentWrapper>
    </Box>
  )
}

export default Home

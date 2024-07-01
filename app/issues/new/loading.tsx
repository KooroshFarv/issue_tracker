import React from 'react';
import  Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import prisma from '../../../prisma/client'
import { NOTFOUND } from 'dns';
import { Card, Flex, Heading, Text, Box} from '@radix-ui/themes';
import IssueStatusBadge from '../../components/issueStatusBadge';
import ReactMarkdown from 'react-markdown'

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-xl:'>
    <Skeleton />
    <Flex className='gap-5 my-8'>
    <Skeleton width='5rem' />
<Skeleton />  
 </Flex>
   <Card className='prose' mt='4'>
    <Skeleton count={3}/>
    </Card>
</Box>
  )
}

export default LoadingNewIssuePage
import React from 'react'
import prisma from '../../../prisma/client'
import { NOTFOUND } from 'dns';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import IssueStatusBadge from '../../components/issueStatusBadge';
import ReactMarkdown from 'react-markdown'

interface Props {
    params : {id:string}
}
const IssueDetailPage = async({params} : Props) => {

   const issue  = await prisma.issue.findUnique({
        where : { id:parseInt(params.id)}

    });
    if (!issue) {
        return <div>Issue not found</div>;
      }
   
  return (
    <div>
        <Heading>{issue.title}</Heading>
        <Flex className='gap-5 my-8'>
        <IssueStatusBadge status= {issue.status}/>
       <Text>{issue.createdAt.toDateString()}</Text>
       </Flex>
       <Card className='prose' mt='4'>
       <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
    </div>
      )
}

export default IssueDetailPage
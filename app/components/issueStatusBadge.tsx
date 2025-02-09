import React from 'react'
import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'


const statusMap : Record<Status ,{label: string, color:'red' | 'violet' | 'green'}> = {
    OPEN : {label : 'open', color : 'red'},
    IN_PROGRESS    : { label : 'in Progress', color: 'violet'},
    CLOSED : {label : 'close', color : 'green'}
}

const issueStatusBadge = ( {status } : {status : Status}) => {
  return (
   <Badge color={statusMap[status].color}>
    {statusMap[status].label}</Badge>
  )
}

export default issueStatusBadge
import React from 'react'
import { Button } from '@radix-ui/themes';
import { Link } from '@radix-ui/themes';


const issueActions = () => {
  return (

    <div className='mb-10 '>
    <Button ><Link href='/issues/new'>New Issue</Link></Button>

    </div>
  )
}

export default issueActions
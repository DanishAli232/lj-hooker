
import { AssignedUsers } from '@/components/users/Users'
import { users } from '@/lib/data'
import React from 'react'

type Props = {}

function Users({}: Props) {
  return (
    <AssignedUsers users={users}/>
  )
}

export default Users
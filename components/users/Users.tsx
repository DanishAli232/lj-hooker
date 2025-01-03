"use client"

import { useState } from "react"
import { Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import type { User } from "@/lib/data"

interface AssignedUsersProps {
  users: User[]
  onAssignmentChange?: (userId: string, assigned: boolean) => void
}

export function AssignedUsers({ users, onAssignmentChange }: AssignedUsersProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full  mx-auto px-20 p-4">
      <div className="flex justify-between items-center px-5">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold mb-1 text-foreground">Assign Users</h2>
          <p className="text-sm text-muted-foreground">
            You can Assign Users here
          </p>
        </div>

        <div className="relative w-1/2 mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-9 border border-gray-200 rounded-md"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-dotted divide-gray-200">
        {filteredUsers.map((user, index) => (
          <div
            key={user.id}
            className={`
              relative flex items-center justify-between px-20 p-4
              ${index % 3 !== 2 ? 'lg:border-r lg:border-dotted lg:border-gray-200' : ''}
              ${index % 2 !== 1 ? 'md:border-r md:border-dotted md:border-gray-200 lg:last:border-r-0' : ''}
            `}
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 rounded-full">
                <AvatarImage 
                  src={user.avatar} 
                  alt={user.username}
                  className="rounded-full"
                />
                <AvatarFallback className="text-sm rounded-full">
                  {user.username.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{user.username}</span>
            </div>
            <Switch
              checked={user.assigned}
              onCheckedChange={(checked) => 
                onAssignmentChange?.(user.id, checked)
              }
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


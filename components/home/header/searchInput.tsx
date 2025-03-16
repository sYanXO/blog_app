import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const searchInput = () => {
  return (
    <form action="">
        <div className='relative flex items-center'>
            <Search className='absolute left-3 h-4 w-4  text-muted-foreground'></Search>
            <Input type='text' name='search' placeholder='Search Articles' className='pl-10 w-48 focus-visible:ring-1'></Input>
        </div>
    </form>
  )
}

export default searchInput
import React from 'react'
import Link from 'next/link'
import { Button } from '../../ui/button'
import SearchInput from './searchInput'
import ToggleMode from './toggle-mode'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  '>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <Link href ="/" className='flex items-center space-x-2 '>
                            <span className='font-bold text-2xl'>
                                <span className='bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent'>100x</span>
                                <span className='text-foreground'>Blogs</span>
                            </span>
                        </Link>
                    </div>
                    {/*Desktop menu*/}

                    <div className='hidden md:flex items-center space-x-4'>
                        <Link href={"/articles"} className='text-sm font-medium text-foreground transition-colors hover:text-foreground'>Articles</Link>

                        <Link href={"/dashboard"} className='text-sm font-medium text-foreground transition-colors hover:text-foreground'>Dashboard</Link>

                        <div className='flex items-center gap-4'>
                            <SearchInput/>
                            <ToggleMode/>
                        </div>



                        <div className='hidden md:flex items-center space-x-4 '>
                            <Button>Login</Button>
                            <Button>Signup</Button>
                        </div>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default Navbar

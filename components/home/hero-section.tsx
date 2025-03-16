import { Section } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className='relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-950'>
      {/*Gradient overlay*/}
      <div className='absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-blue-600/20 before:to-indigo-600/20 before:blur-3xl '/>

      <div className='container relative mx-auto flex flex-col h-full items-center justify-center px-4 py-4 md:flex-row md:py-32'>
        <div className='flex-1 space-y-8 text-center md:text-left'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>Explore the World Through 
            <span className='bg-gradient-to-r from-violet-400 bg-clip-text text-transparent'>
              {" "}
              Words
            </span>
          </h1>
          
          <p className='mx-auto max-w-2xl text-lg text-gray-300 md:text-xl'>Discover insightful articles, thought provoking stories and expert perspectives on Technology and Lifestyle</p>
          <div className='flex flex-col items-center gap-4 sm:flex-row md:justify-start'>
                <Button>Start Reading</Button>
                <Button variant={'outline'}>Explore Topics</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
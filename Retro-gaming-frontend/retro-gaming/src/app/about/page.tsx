"use client"
import HowFar from '@/components/About/Sections/HowFarSection'
import Where from '@/components/About/Sections/WhereSection'
import Who from '@/components/About/Sections/WhoSection'
import React from 'react'

const page = () => {
  return (
    <main className='px-[130px]'>
        <Who />
        <Where />
        <HowFar />
    </main>
  )
}

export default page

import CTA from '@/components/home/CTA'
import Hero from '@/components/home/Hero'
// import { Step } from '@/components/home/Steps'
import CoreTeam from '@/components/home/coreteam'
import Domains from '@/components/home/domains'
import Faq from '@/components/home/faq'
import Projects from '@/components/home/projects'
import Founder from '@/components/home/founder'

import React from 'react'
import dynamic from 'next/dynamic'

const Step = dynamic(() => import("@/components/home/Steps"), { ssr: false })

const page = () => {
  return (
    <main>
      <Hero/>
      <Step/>
      <CTA/>
      <Projects/>
    
      <Domains/>
      <Founder/>
      <CoreTeam/>
      {/* <Faq/> */}
    </main>
  )
}

export default page

import React from 'react'
import Sidebar from '@/app/component/sidebar'
import Navbar from '@/app/component/Navbar'
import Section from '@/app/component/Section1'
import Section1 from '@/app/component/Section2'
import Section2 from '@/app/component/Section3'
import Section3 from '@/app/component/Section4'
import Section4 from '@/app/component/Section5'
import Footer from './component/Footer'
import Route from '@/app/Router/inputroute'

const page = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Section />
      <Route />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  )
}

export default page
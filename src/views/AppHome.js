import React from 'react'
import AppHero from '../components/home/AppHero'
import AppAbout from '../components/home/AppAbout'
import AppFeature from '../components/home/AppFeature'
import AppWork from '../components/home/AppWork'
import AppFAQ from '../components/home/AppFAQ'
import AppPricing from '../components/home/AppPricing'
import AppContact from '../components/home/AppContact'
import AppFooter from '../components/common/Footer'

function Home() {
  return (
    <div className='main'>
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWork />
      <AppFAQ />
      <AppPricing />
      <AppContact />
      <AppFooter />
    </div>
  )
}

export default Home
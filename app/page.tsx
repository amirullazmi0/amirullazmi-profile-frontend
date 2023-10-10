import Image from 'next/image'
import Header from './Component/Header'
import Section1 from './Component/Section1'
import Section2 from './Component/Section2'
import Section3 from './Component/Section3'
import Section4 from './Component/Section4'
import Navigation from './Component/navigation/Navigation'
import Footer from './Component/footer/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Me',
}

export default function Home() {
  return (
    <main className='body-main'>
      <Navigation active={'about-me'} />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
      <Footer />
    </main>
  )
}

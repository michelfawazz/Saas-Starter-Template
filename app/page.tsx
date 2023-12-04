import HeroSection from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (

    <main className='flex-grow'>
      <NavBar />
      <HeroSection />

    </main>

  )
}

import BigCard from '@/components/BigCard'
import HeroSection from '@/components/Hero'
import HomeGrid from '@/components/HomeGrid'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (

    <main className='flex-grow'>

      <HeroSection />
      {/* <BigCard /> */}
      <HomeGrid />

    </main>

  )
}

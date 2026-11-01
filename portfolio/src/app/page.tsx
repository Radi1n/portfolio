import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Tools } from '@/components/sections/Tools'
import { Work } from '@/components/sections/Work'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Tools />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

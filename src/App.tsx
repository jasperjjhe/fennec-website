import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { RoleSelector } from './sections/RoleSelector'
import { FerryAI } from './sections/FerryAI'
import { Integrations } from './sections/Integrations'
import { Manifesto } from './sections/Manifesto'
import { Team } from './sections/Team'
import { SocialProof } from './sections/SocialProof'
import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'
import { Navbar } from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <RoleSelector />
      <FerryAI />
      <Integrations />
      <Manifesto />
      <Team />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  )
}

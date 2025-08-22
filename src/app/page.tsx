import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <NavBar />
      <Hero />
      <Section
        eyebrow="Automated Precision"
        title={<>
          From raw materials to sentient motion
        </>}
        description="Witness a fully synchronized swarm of robotic artisans. Vision-guided, AI-coordinated, and laser-precise — forging the future at gigafactory scale."
        cta={{ label: 'Explore Systems', href: '#systems' }}
        id="about"
      />
      <Section
        eyebrow="Neural Manufacturing"
        title="A brain for every arm"
        description="Each unit runs a real-time control stack trained on billions of trajectories. Safety-verified, self-calibrating, relentlessly efficient."
        reversed
        id="systems"
        cta={{ label: 'Security Protocols', href: '#security' }}
      />
      <Section
        eyebrow="Security"
        title="Robocop-grade assurance"
        description="End-to-end encrypted command mesh, on-device anomaly detection, and multi-layer containment. Built as if the future depends on it."
        id="security"
      />
      <Footer />
    </main>
  )
}

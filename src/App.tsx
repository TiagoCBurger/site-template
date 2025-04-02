import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="lupi-theme">
      <div className="min-h-screen bg-lupi-darker text-foreground relative overflow-hidden">
        <Navbar />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

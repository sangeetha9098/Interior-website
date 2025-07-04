import HeroSection from '@/components/ui/hero-section';
import WhoWeAreSection from '@/components/ui/who-we-are-section';
import ServicesSection from '@/components/ui/services-section';
import InteriorExpertiseSection from '@/components/ui/interior-expertise-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Interior Expertise Section */}
      <InteriorExpertiseSection />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-accent prakruti-texture">
        <div className="container-prakruti text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 brush-stroke">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Get a free consultation and bring your vision to life
          </p>
          <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 signature-shadow hover:signature-glow cursor-magic hover-lift">
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background py-12 wood-grain-texture">
        <div className="container-prakruti">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 brush-stroke">Prakruti Interiors</h3>
            <p className="text-background/60 mb-6 italic">Interior that Reflects your Style</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            {[
              { name: 'About', href: '#' },
              { name: 'Services', href: '#' },
              { name: 'Portfolio', href: '#' },
              { name: 'Contact', href: '#' }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-background/60 hover:text-background transition-all duration-300 hover:scale-110 cursor-magic relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-background/40 text-sm">
              © 2025 Prakruti Interiors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

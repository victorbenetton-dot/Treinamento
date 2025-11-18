import { Button } from "@/components/ui/button";
import heroImage from "./hero-image.png"

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
      
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 transform rotate-45 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 transform -rotate-45 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight tracking-tight">
                MUDE SUA VIDA COM
              </h1>
              <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                LEANDRO BONI
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto lg:mx-0">
              Transforme sua mentalidade, alcance seus objetivos e conquiste o sucesso que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="hero"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 h-auto"
              >
                Comece Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Leandro Boni - Coach e Mentor"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-strategy.jpg";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <Badge variant="secondary" className="w-fit">
            <Sparkles className="w-4 h-4 mr-2" />
            Nueva plataforma de IA para emprendedores
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Estrategias{" "}
            <span className="text-gradient-primary">inteligentes</span>
            {" "}para tu negocio
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
            Transforma ideas en negocios exitosos con IA. Genera prototipos, 
            valida mercados y crea estrategias de marketing que realmente funcionan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="gradient-primary shadow-primary hover:shadow-accent transition-all duration-300 group px-8 py-6 text-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Empezar ahora
              <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg border-2 hover:bg-secondary group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver cómo funciona
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Ideas validadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Precisión IA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Asistencia</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:ml-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img 
              src={heroImage} 
              alt="SmartStrategy AI Platform" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating stats cards */}
          <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border animate-float">
            <div className="text-sm font-medium text-success">+127% ROI</div>
            <div className="text-xs text-muted-foreground">este mes</div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-sm font-medium text-accent">12 ideas</div>
            <div className="text-xs text-muted-foreground">en validación</div>
          </div>
        </div>
      </div>
    </section>
  );
};
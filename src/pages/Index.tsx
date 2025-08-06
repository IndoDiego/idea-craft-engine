import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lightbulb, Target, Brain, Sparkles, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-strategy.jpg";
import pretotypeIcon from "@/assets/icon-pretotype.jpg";
import marketingIcon from "@/assets/icon-marketing.jpg";
import decisionsIcon from "@/assets/icon-decisions.jpg";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  const [isGetStartedHovered, setIsGetStartedHovered] = useState(false);

  const features = [
    {
      title: "Pretotipado Inteligente",
      description: "Transforma tus ideas en prototipos validables con IA. Canvas de negocio, análisis de mercado y validación automática.",
      icon: pretotypeIcon,
      comingSoon: false
    },
    {
      title: "Estrategias de Marketing",
      description: "Genera planes de marketing digital personalizados. SEO, SEM, redes sociales y email marketing con calendario automático.",
      icon: marketingIcon,
      comingSoon: false
    },
    {
      title: "Asistente de Decisiones",
      description: "Análisis comparativo con IA. Evaluación de coste vs impacto, recomendaciones automáticas y visualización de datos.",
      icon: decisionsIcon,
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Potenciado por IA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Todo lo que necesitas para{" "}
              <span className="text-gradient-primary">escalar tu negocio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desde la concepción de la idea hasta la estrategia de marketing, 
              nuestra plataforma te guía en cada paso del camino empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar{" "}
            <span className="text-gradient-primary">tus ideas</span> en realidad?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a cientos de emprendedores que ya están validando sus ideas 
            y escalando sus negocios con inteligencia artificial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary shadow-primary hover:shadow-accent transition-all duration-300 group px-8 py-6 text-lg"
              onMouseEnter={() => setIsGetStartedHovered(true)}
              onMouseLeave={() => setIsGetStartedHovered(false)}
            >
              Comenzar gratis
              <ArrowRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                isGetStartedHovered ? 'translate-x-1' : ''
              }`} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg border-2 hover:bg-secondary"
            >
              Ver demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Lightbulb, Target } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "400%",
      label: "Aumento en validación de ideas",
      description: "Comparado con métodos tradicionales"
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Emprendedores activos",
      description: "Creando estrategias diariamente"
    },
    {
      icon: Lightbulb,
      value: "12K",
      label: "Ideas procesadas",
      description: "Y creciendo cada día"
    },
    {
      icon: Target,
      value: "89%",
      label: "Tasa de éxito",
      description: "En implementación de estrategias"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados que{" "}
            <span className="text-gradient-primary">hablan por sí solos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de emprendedores ya están usando SmartStrategy para 
            acelerar el crecimiento de sus negocios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group gradient-card hover:shadow-primary"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  comingSoon?: boolean;
}

export const FeatureCard = ({ title, description, icon, comingSoon = false }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group h-full gradient-card hover:shadow-primary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {comingSoon && (
        <Badge className="absolute top-4 right-4 bg-warning text-warning-foreground">
          Próximamente
        </Badge>
      )}
      
      <CardHeader className="space-y-4">
        <div className="relative w-16 h-16 mx-auto">
          <img 
            src={icon} 
            alt={title}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl" />
        </div>
        
        <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <CardDescription className="text-center text-base leading-relaxed">
          {description}
        </CardDescription>
        
        <div className="flex justify-center">
          <Button 
            variant={comingSoon ? "secondary" : "default"}
            className={`group/btn transition-all duration-300 ${
              !comingSoon ? 'gradient-primary shadow-primary hover:shadow-accent' : ''
            }`}
            disabled={comingSoon}
          >
            {comingSoon ? 'Muy pronto' : 'Explorar'}
            {!comingSoon && (
              <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`} />
            )}
          </Button>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </CardContent>
    </Card>
  );
};
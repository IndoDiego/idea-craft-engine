import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  PieChart, 
  FileText,
  ExternalLink,
  Play
} from "lucide-react";

interface ValidationStepsProps {
  validation: {
    score: number;
    fortalezas: string[];
    debilidades: string[];
    recomendaciones: string[];
  };
}

export const ValidationSteps = ({ validation }: ValidationStepsProps) => {
  const validationMethods = [
    {
      title: "Entrevistas con usuarios",
      description: "Habla directamente con tu mercado objetivo",
      icon: Users,
      effort: "Bajo",
      impact: "Alto",
      timeline: "1-2 semanas"
    },
    {
      title: "Landing page de validación",
      description: "Crea una página para medir interés real",
      icon: FileText,
      effort: "Medio",
      impact: "Alto",
      timeline: "3-5 días"
    },
    {
      title: "Encuesta online",
      description: "Recopila datos cuantitativos del mercado",
      icon: PieChart,
      effort: "Bajo",
      impact: "Medio",
      timeline: "1 semana"
    },
    {
      title: "Prototipo funcional",
      description: "Desarrolla una versión básica para testear",
      icon: Play,
      effort: "Alto",
      impact: "Alto",
      timeline: "2-4 semanas"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excelente";
    if (score >= 60) return "Bueno";
    return "Necesita mejoras";
  };

  return (
    <div className="space-y-6">
      {/* Score general */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            Análisis de Viabilidad
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className={`text-4xl font-bold ${getScoreColor(validation.score)}`}>
                {validation.score}/100
              </div>
              <Badge variant="secondary" className="mt-1">
                {getScoreLabel(validation.score)}
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Puntuación de viabilidad</p>
              <p className="text-xs text-muted-foreground">Basado en análisis de IA</p>
            </div>
          </div>
          <Progress value={validation.score} className="h-3" />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Fortalezas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              Fortalezas identificadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {validation.fortalezas.map((fortaleza, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{fortaleza}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Debilidades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-600">
              <AlertTriangle className="w-5 h-5" />
              Áreas de mejora
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {validation.debilidades.map((debilidad, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{debilidad}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recomendaciones */}
      <Card>
        <CardHeader>
          <CardTitle>Próximos pasos recomendados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {validation.recomendaciones.map((recomendacion, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-sm">{recomendacion}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Métodos de validación */}
      <Card>
        <CardHeader>
          <CardTitle>Métodos de validación recomendados</CardTitle>
          <p className="text-sm text-muted-foreground">
            Implementa estos métodos para validar tu idea antes del lanzamiento
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {validationMethods.map((method, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <method.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">{method.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs mb-3">
                    <span>Esfuerzo: <Badge variant="outline" className="text-xs">{method.effort}</Badge></span>
                    <span>Impacto: <Badge variant="outline" className="text-xs">{method.impact}</Badge></span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{method.timeline}</span>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Guía
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
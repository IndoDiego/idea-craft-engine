import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, Users, Calendar, CheckCircle, AlertCircle } from "lucide-react";

interface BusinessData {
  businessName: string;
  industry: string;
  targetAudience: string;
  budget: string;
  timeframe: string;
  goals: string;
  currentChannels: string[];
  description: string;
}

interface MarketingPlanGeneratorProps {
  businessData: BusinessData;
}

export const MarketingPlanGenerator = ({ businessData }: MarketingPlanGeneratorProps) => {
  const kpis = [
    { name: "Tráfico web", current: 2500, target: 5000, unit: "visitas/mes" },
    { name: "Conversiones", current: 45, target: 120, unit: "leads/mes" },
    { name: "ROI", current: 150, target: 250, unit: "%" },
    { name: "Brand Awareness", current: 20, target: 45, unit: "%" }
  ];

  const strategies = [
    {
      title: "SEO & Contenido",
      priority: "Alta",
      timeline: "1-3 meses",
      description: "Optimización técnica y creación de contenido de valor",
      actions: [
        "Auditoría SEO completa",
        "Investigación de palabras clave",
        "Blog con 2 artículos/semana",
        "Optimización on-page"
      ],
      status: "ready"
    },
    {
      title: "Google Ads",
      priority: "Alta", 
      timeline: "Inmediato",
      description: "Campañas de búsqueda y display para generar tráfico cualificado",
      actions: [
        "Configurar Google Analytics",
        "Crear campañas de búsqueda",
        "Landing pages optimizadas",
        "Remarketing campaigns"
      ],
      status: "ready"
    },
    {
      title: "Redes Sociales",
      priority: "Media",
      timeline: "2-4 meses", 
      description: "Presencia orgánica y publicidad en plataformas relevantes",
      actions: [
        "Estrategia de contenido",
        "Calendario de publicaciones",
        "Community management",
        "Influencer partnerships"
      ],
      status: "planning"
    },
    {
      title: "Email Marketing",
      priority: "Media",
      timeline: "1-2 meses",
      description: "Automatización y nurturing de leads",
      actions: [
        "Setup de herramientas",
        "Secuencias de bienvenida",
        "Newsletter semanal",
        "Segmentación avanzada"
      ],
      status: "ready"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="gradient-card text-center">
          <CardContent className="pt-6">
            <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{businessData.timeframe}</div>
            <p className="text-sm text-muted-foreground">meses de estrategia</p>
          </CardContent>
        </Card>
        
        <Card className="gradient-card text-center">
          <CardContent className="pt-6">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">€{parseInt(businessData.budget).toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">presupuesto mensual</p>
          </CardContent>
        </Card>
        
        <Card className="gradient-card text-center">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">4</div>
            <p className="text-sm text-muted-foreground">canales principales</p>
          </CardContent>
        </Card>
        
        <Card className="gradient-card text-center">
          <CardContent className="pt-6">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold">250%</div>
            <p className="text-sm text-muted-foreground">ROI estimado</p>
          </CardContent>
        </Card>
      </div>

      {/* KPIs Progress */}
      <Card className="gradient-card">
        <CardHeader>
          <CardTitle>Objetivos y KPIs</CardTitle>
          <CardDescription>
            Métricas clave para medir el éxito de tu estrategia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{kpi.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {kpi.current} → {kpi.target} {kpi.unit}
                  </span>
                </div>
                <Progress 
                  value={(kpi.current / kpi.target) * 100} 
                  className="h-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Actual: {kpi.current} {kpi.unit}</span>
                  <span>Objetivo: {kpi.target} {kpi.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategies */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Estrategias Recomendadas</h3>
        <div className="grid gap-6">
          {strategies.map((strategy, index) => (
            <Card key={index} className="gradient-card hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {strategy.status === 'ready' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-yellow-500" />
                      )}
                      {strategy.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {strategy.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={strategy.priority === 'Alta' ? 'default' : 'secondary'}
                      className="mb-2"
                    >
                      {strategy.priority}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{strategy.timeline}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Acciones clave:</h4>
                    <ul className="space-y-1">
                      {strategy.actions.map((action, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Estado:</h4>
                    <div className="flex items-center gap-2">
                      {strategy.status === 'ready' ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-500">Listo para implementar</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-yellow-500">En planificación</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
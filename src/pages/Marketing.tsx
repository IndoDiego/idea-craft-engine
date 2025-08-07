import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Target, TrendingUp, Calendar, DollarSign, Users, Search, Mail, Share2, BarChart3 } from "lucide-react";
import { MarketingPlanGenerator } from "@/components/MarketingPlanGenerator";
import { MarketingCalendar } from "@/components/MarketingCalendar";

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

const Marketing = () => {
  const [step, setStep] = useState<'form' | 'plan'>('form');
  const [businessData, setBusinessData] = useState<BusinessData>({
    businessName: '',
    industry: '',
    targetAudience: '',
    budget: '',
    timeframe: '',
    goals: '',
    currentChannels: [],
    description: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsGenerating(false);
    setStep('plan');
  };

  const handleChannelToggle = (channel: string) => {
    setBusinessData(prev => ({
      ...prev,
      currentChannels: prev.currentChannels.includes(channel)
        ? prev.currentChannels.filter(c => c !== channel)
        : [...prev.currentChannels, channel]
    }));
  };

  if (step === 'plan') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setStep('form')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al formulario
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                Plan de Marketing para{" "}
                <span className="text-gradient-primary">{businessData.businessName}</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Estrategia personalizada generada con IA
              </p>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="strategy">Estrategia</TabsTrigger>
              <TabsTrigger value="calendar">Calendario</TabsTrigger>
              <TabsTrigger value="budget">Presupuesto</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <MarketingPlanGenerator businessData={businessData} />
            </TabsContent>

            <TabsContent value="strategy">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    title: "SEO", 
                    icon: Search, 
                    color: "text-blue-500",
                    items: ["Optimización de palabras clave", "Creación de contenido SEO", "Link building"]
                  },
                  { 
                    title: "SEM", 
                    icon: TrendingUp, 
                    color: "text-green-500",
                    items: ["Campañas Google Ads", "Optimización CPC", "Landing pages"]
                  },
                  { 
                    title: "Redes Sociales", 
                    icon: Share2, 
                    color: "text-purple-500",
                    items: ["Estrategia de contenido", "Community management", "Publicidad social"]
                  },
                  { 
                    title: "Email Marketing", 
                    icon: Mail, 
                    color: "text-orange-500",
                    items: ["Automatizaciones", "Newsletters", "Segmentación"]
                  }
                ].map((channel, index) => (
                  <Card key={index} className="gradient-card hover:shadow-primary">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <channel.icon className={`w-6 h-6 ${channel.color}`} />
                        <CardTitle>{channel.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {channel.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <MarketingCalendar businessData={businessData} />
            </TabsContent>

            <TabsContent value="budget">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="gradient-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Distribución del Presupuesto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { channel: "Google Ads", percentage: 40, amount: parseInt(businessData.budget) * 0.4 },
                      { channel: "Facebook/Instagram", percentage: 25, amount: parseInt(businessData.budget) * 0.25 },
                      { channel: "SEO/Contenido", percentage: 20, amount: parseInt(businessData.budget) * 0.2 },
                      { channel: "Email Marketing", percentage: 15, amount: parseInt(businessData.budget) * 0.15 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{item.channel}</span>
                          <span className="text-sm">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          €{item.amount.toFixed(0)}/mes
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="gradient-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      ROI Estimado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gradient-primary">
                          250%
                        </div>
                        <p className="text-sm text-muted-foreground">ROI estimado en 6 meses</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="text-center">
                          <div className="text-xl font-semibold">€{(parseInt(businessData.budget) * 6).toLocaleString()}</div>
                          <p className="text-xs text-muted-foreground">Inversión 6 meses</p>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-semibold text-green-500">€{(parseInt(businessData.budget) * 6 * 2.5).toLocaleString()}</div>
                          <p className="text-xs text-muted-foreground">Retorno estimado</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 text-center">
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/'}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estrategias de{" "}
            <span className="text-gradient-primary">Marketing Digital</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Genera un plan de marketing personalizado con IA. Incluye SEO, SEM, 
            redes sociales y email marketing con calendario automático.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6" />
              Cuéntanos sobre tu negocio
            </CardTitle>
            <CardDescription>
              Completa la información para generar tu estrategia personalizada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Nombre del negocio</Label>
                  <Input
                    id="businessName"
                    value={businessData.businessName}
                    onChange={(e) => setBusinessData(prev => ({...prev, businessName: e.target.value}))}
                    placeholder="Ej: Mi Startup Tech"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industria</Label>
                  <Select 
                    value={businessData.industry} 
                    onValueChange={(value) => setBusinessData(prev => ({...prev, industry: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu industria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tecnologia">Tecnología</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="servicios">Servicios</SelectItem>
                      <SelectItem value="salud">Salud</SelectItem>
                      <SelectItem value="educacion">Educación</SelectItem>
                      <SelectItem value="finanzas">Finanzas</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Presupuesto mensual (€)</Label>
                  <Select 
                    value={businessData.budget} 
                    onValueChange={(value) => setBusinessData(prev => ({...prev, budget: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu presupuesto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000">€1,000 - €3,000</SelectItem>
                      <SelectItem value="3000">€3,000 - €5,000</SelectItem>
                      <SelectItem value="5000">€5,000 - €10,000</SelectItem>
                      <SelectItem value="10000">€10,000 - €20,000</SelectItem>
                      <SelectItem value="20000">€20,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeframe">Plazo del proyecto</Label>
                  <Select 
                    value={businessData.timeframe} 
                    onValueChange={(value) => setBusinessData(prev => ({...prev, timeframe: value}))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="¿Cuánto tiempo tienes?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 meses</SelectItem>
                      <SelectItem value="6">6 meses</SelectItem>
                      <SelectItem value="12">1 año</SelectItem>
                      <SelectItem value="24">2 años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience">Audiencia objetivo</Label>
                <Input
                  id="targetAudience"
                  value={businessData.targetAudience}
                  onChange={(e) => setBusinessData(prev => ({...prev, targetAudience: e.target.value}))}
                  placeholder="Ej: Empresarios entre 25-45 años, interesados en tecnología"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Objetivos principales</Label>
                <Textarea
                  id="goals"
                  value={businessData.goals}
                  onChange={(e) => setBusinessData(prev => ({...prev, goals: e.target.value}))}
                  placeholder="Ej: Aumentar ventas un 50%, mejorar brand awareness, generar leads cualificados..."
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Canales actuales (selecciona los que ya usas)</Label>
                <div className="flex flex-wrap gap-2">
                  {['Google Ads', 'Facebook', 'Instagram', 'LinkedIn', 'Email', 'SEO', 'Blog', 'YouTube'].map((channel) => (
                    <Badge
                      key={channel}
                      variant={businessData.currentChannels.includes(channel) ? "default" : "outline"}
                      className="cursor-pointer transition-all hover:scale-105"
                      onClick={() => handleChannelToggle(channel)}
                    >
                      {channel}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción del negocio</Label>
                <Textarea
                  id="description"
                  value={businessData.description}
                  onChange={(e) => setBusinessData(prev => ({...prev, description: e.target.value}))}
                  placeholder="Describe brevemente tu negocio, productos/servicios y qué te diferencia de la competencia..."
                  rows={4}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary shadow-primary hover:shadow-accent py-6 text-lg"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Generando estrategia...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Generar Plan de Marketing
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Marketing;
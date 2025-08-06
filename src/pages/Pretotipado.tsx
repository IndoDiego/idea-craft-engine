import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Lightbulb, Target, Users, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CanvasVisualization } from "@/components/CanvasVisualization";
import { ValidationSteps } from "@/components/ValidationSteps";

const Pretotipado = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    idea: "",
    mercado: "",
    cliente: "",
    problema: "",
    solucion: "",
    presupuesto: "",
    tiempo: ""
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulamos llamada a IA
    setTimeout(() => {
      setResults({
        canvas: {
          propuestaValor: "Plataforma de gestión inteligente que automatiza procesos y mejora la eficiencia operativa",
          segmentoClientes: "Pequeñas y medianas empresas del sector tecnológico",
          canalDistribucion: "Venta directa, partners tecnológicos, marketing digital",
          relacionClientes: "Soporte 24/7, comunidad de usuarios, onboarding personalizado",
          fuentesIngresos: "Suscripción mensual, comisiones por transacciones, servicios premium",
          recursosClaves: "Equipo técnico, infraestructura cloud, algoritmos de IA",
          actividadesClaves: "Desarrollo de software, atención al cliente, marketing digital",
          socios: "Proveedores de cloud, integradores de sistemas, consultoras",
          estructuraCostos: "Desarrollo, infraestructura, marketing, personal"
        },
        validacion: {
          score: 85,
          fortalezas: ["Mercado en crecimiento", "Diferenciación clara", "Equipo experimentado"],
          debilidades: ["Competencia establecida", "Dependencia tecnológica"],
          recomendaciones: ["Validar con usuarios beta", "Crear MVP", "Analizar competencia"]
        }
      });
      setIsGenerating(false);
      setStep(3);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Pretotipado Inteligente</h1>
                <p className="text-sm text-muted-foreground">Transforma tu idea en un modelo de negocio validado</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {[
              { num: 1, title: "Información básica", active: step >= 1 },
              { num: 2, title: "Generando análisis", active: step >= 2 },
              { num: 3, title: "Resultados", active: step >= 3 }
            ].map((stepItem, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  stepItem.active ? 'bg-gradient-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {stepItem.num}
                </div>
                <span className={`ml-3 font-medium ${stepItem.active ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {stepItem.title}
                </span>
                {index < 2 && (
                  <div className={`w-16 h-0.5 mx-4 ${stepItem.active ? 'bg-primary' : 'bg-muted'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Cuéntanos sobre tu idea</CardTitle>
              <CardDescription>
                Completa la información para generar tu canvas de negocio personalizado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="idea">Describe tu idea de negocio</Label>
                  <Textarea
                    id="idea"
                    placeholder="Ej: Una app que conecta a personas que quieren hacer ejercicio juntas..."
                    value={formData.idea}
                    onChange={(e) => setFormData({...formData, idea: e.target.value})}
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="problema">¿Qué problema resuelve?</Label>
                  <Textarea
                    id="problema"
                    placeholder="Ej: Las personas no tienen motivación para hacer ejercicio solas..."
                    value={formData.problema}
                    onChange={(e) => setFormData({...formData, problema: e.target.value})}
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cliente">¿Quién es tu cliente ideal?</Label>
                  <Input
                    id="cliente"
                    placeholder="Ej: Adultos jóvenes de 25-35 años que viven en ciudades"
                    value={formData.cliente}
                    onChange={(e) => setFormData({...formData, cliente: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mercado">Tamaño del mercado</Label>
                  <Select value={formData.mercado} onValueChange={(value) => setFormData({...formData, mercado: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tamaño" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local (ciudad/región)</SelectItem>
                      <SelectItem value="nacional">Nacional</SelectItem>
                      <SelectItem value="internacional">Internacional</SelectItem>
                      <SelectItem value="global">Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="presupuesto">Presupuesto inicial estimado</Label>
                  <Select value={formData.presupuesto} onValueChange={(value) => setFormData({...formData, presupuesto: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona rango" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-5k">€0 - €5,000</SelectItem>
                      <SelectItem value="5k-25k">€5,000 - €25,000</SelectItem>
                      <SelectItem value="25k-100k">€25,000 - €100,000</SelectItem>
                      <SelectItem value="100k+">€100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tiempo">Timeline para lanzamiento</Label>
                  <Select value={formData.tiempo} onValueChange={(value) => setFormData({...formData, tiempo: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3meses">1-3 meses</SelectItem>
                      <SelectItem value="3-6meses">3-6 meses</SelectItem>
                      <SelectItem value="6-12meses">6-12 meses</SelectItem>
                      <SelectItem value="12meses+">Más de 12 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  onClick={() => setStep(2)} 
                  className="gradient-primary shadow-primary hover:shadow-accent px-8"
                  disabled={!formData.idea || !formData.problema}
                >
                  Generar Pretotipo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Generating */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="p-12">
                <div className="animate-pulse">
                  <Sparkles className="w-16 h-16 mx-auto text-primary mb-6" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Generando tu pretotipo...</h2>
                <p className="text-muted-foreground mb-6">
                  Nuestra IA está analizando tu idea y creando un canvas de negocio personalizado
                </p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
                <Button onClick={handleGenerate} className="mt-6 gradient-primary">
                  Simular generación (demo)
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && results && (
          <div className="space-y-8">
            <div className="text-center">
              <Badge className="mb-4 bg-success text-success-foreground">
                <Target className="w-4 h-4 mr-2" />
                Pretotipo generado exitosamente
              </Badge>
              <h2 className="text-3xl font-bold mb-2">Tu Canvas de Negocio</h2>
              <p className="text-muted-foreground">
                Análisis completo basado en tu idea con validación inteligente
              </p>
            </div>
            
            <CanvasVisualization canvas={results.canvas} />
            <ValidationSteps validation={results.validacion} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pretotipado;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  Users, 
  Heart, 
  Share2, 
  DollarSign, 
  Wrench, 
  Activity, 
  Handshake, 
  Calculator,
  Download,
  Edit
} from "lucide-react";

interface CanvasVisualizationProps {
  canvas: {
    propuestaValor: string;
    segmentoClientes: string;
    canalDistribucion: string;
    relacionClientes: string;
    fuentesIngresos: string;
    recursosClaves: string;
    actividadesClaves: string;
    socios: string;
    estructuraCostos: string;
  };
}

export const CanvasVisualization = ({ canvas }: CanvasVisualizationProps) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'socios',
      title: 'Socios Clave',
      icon: Handshake,
      content: canvas.socios,
      color: 'bg-blue-50 border-blue-200 hover:border-blue-300',
      iconColor: 'text-blue-600'
    },
    {
      id: 'actividades',
      title: 'Actividades Clave',
      icon: Activity,
      content: canvas.actividadesClaves,
      color: 'bg-green-50 border-green-200 hover:border-green-300',
      iconColor: 'text-green-600'
    },
    {
      id: 'recursos',
      title: 'Recursos Clave',
      icon: Wrench,
      content: canvas.recursosClaves,
      color: 'bg-yellow-50 border-yellow-200 hover:border-yellow-300',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'propuesta',
      title: 'Propuesta de Valor',
      icon: Heart,
      content: canvas.propuestaValor,
      color: 'bg-red-50 border-red-200 hover:border-red-300',
      iconColor: 'text-red-600',
      featured: true
    },
    {
      id: 'relaciones',
      title: 'Relaciones con Clientes',
      icon: Users,
      content: canvas.relacionClientes,
      color: 'bg-purple-50 border-purple-200 hover:border-purple-300',
      iconColor: 'text-purple-600'
    },
    {
      id: 'canales',
      title: 'Canales',
      icon: Share2,
      content: canvas.canalDistribucion,
      color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-300',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'segmentos',
      title: 'Segmentos de Clientes',
      icon: Users,
      content: canvas.segmentoClientes,
      color: 'bg-pink-50 border-pink-200 hover:border-pink-300',
      iconColor: 'text-pink-600'
    },
    {
      id: 'costos',
      title: 'Estructura de Costos',
      icon: Calculator,
      content: canvas.estructuraCostos,
      color: 'bg-gray-50 border-gray-200 hover:border-gray-300',
      iconColor: 'text-gray-600'
    },
    {
      id: 'ingresos',
      title: 'Fuentes de Ingresos',
      icon: DollarSign,
      content: canvas.fuentesIngresos,
      color: 'bg-emerald-50 border-emerald-200 hover:border-emerald-300',
      iconColor: 'text-emerald-600'
    }
  ];

  const renderSection = (section: typeof sections[0], extraClasses = "") => {
    const IconComponent = section.icon;
    
    return (
      <Card 
        key={section.id}
        className={`cursor-pointer transition-all duration-300 ${section.color} ${extraClasses} ${
          selectedSection === section.id ? 'ring-2 ring-primary scale-105' : ''
        }`}
        onClick={() => setSelectedSection(selectedSection === section.id ? null : section.id)}
      >
        {section.featured && (
          <CardHeader className="pb-3">
            <Badge className="w-fit mb-2 bg-primary">Núcleo</Badge>
            <CardTitle className="text-sm flex items-center gap-2">
              <IconComponent className={`w-4 h-4 ${section.iconColor}`} />
              {section.title}
            </CardTitle>
          </CardHeader>
        )}
        {!section.featured && (
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <IconComponent className={`w-4 h-4 ${section.iconColor}`} />
              {section.title}
            </CardTitle>
          </CardHeader>
        )}
        <CardContent className="pt-0">
          <p className={`leading-relaxed ${section.featured ? 'text-sm font-medium' : 'text-xs'}`}>
            {section.content}
          </p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Canvas de Modelo de Negocio</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            Editar
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* Canvas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-fr">
        {/* Primera fila */}
        {renderSection(sections[0])}
        {renderSection(sections[1])}
        {renderSection(sections[3], "md:row-span-2")}
        {renderSection(sections[4])}
        {renderSection(sections[6])}

        {/* Segunda fila */}
        {renderSection(sections[2])}
        {renderSection(sections[5])}

        {/* Tercera fila - costos e ingresos */}
        {renderSection(sections[7], "md:col-span-2")}
        {renderSection(sections[8], "md:col-span-2")}
      </div>

      {selectedSection && (
        <Card className="border-primary/50 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {(() => {
                const section = sections.find(s => s.id === selectedSection);
                const IconComponent = section?.icon;
                return (
                  <>
                    {IconComponent && <IconComponent className={`w-6 h-6 mt-1 ${section.iconColor}`} />}
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{section?.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{section?.content}</p>
                    </div>
                  </>
                );
              })()}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
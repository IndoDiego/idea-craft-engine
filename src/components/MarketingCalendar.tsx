import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, Clock, Users, DollarSign } from "lucide-react";

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

interface MarketingCalendarProps {
  businessData: BusinessData;
}

interface CalendarEvent {
  date: string;
  title: string;
  type: 'seo' | 'sem' | 'social' | 'email';
  priority: 'high' | 'medium' | 'low';
  duration: string;
  cost?: string;
}

export const MarketingCalendar = ({ businessData }: MarketingCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = este mes, 1 = siguiente, etc.
  
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  
  const events: CalendarEvent[] = [
    // Mes 1
    { date: "2024-01-05", title: "Auditoría SEO completa", type: "seo", priority: "high", duration: "3 días" },
    { date: "2024-01-08", title: "Setup Google Analytics 4", type: "sem", priority: "high", duration: "1 día" },
    { date: "2024-01-10", title: "Investigación palabras clave", type: "seo", priority: "high", duration: "2 días" },
    { date: "2024-01-15", title: "Lanzar primera campaña Google Ads", type: "sem", priority: "high", duration: "1 día", cost: "€500" },
    { date: "2024-01-20", title: "Crear perfiles redes sociales", type: "social", priority: "medium", duration: "2 días" },
    { date: "2024-01-25", title: "Configurar email marketing", type: "email", priority: "medium", duration: "1 día" },
    
    // Mes 2
    { date: "2024-02-01", title: "Publicar primer artículo blog", type: "seo", priority: "high", duration: "1 día" },
    { date: "2024-02-05", title: "Optimizar landing pages", type: "sem", priority: "high", duration: "3 días" },
    { date: "2024-02-10", title: "Campaña Instagram/Facebook", type: "social", priority: "medium", duration: "2 días", cost: "€300" },
    { date: "2024-02-15", title: "Primera newsletter", type: "email", priority: "medium", duration: "1 día" },
    { date: "2024-02-20", title: "Análisis competencia", type: "seo", priority: "medium", duration: "2 días" },
    { date: "2024-02-25", title: "Optimización campañas SEM", type: "sem", priority: "high", duration: "1 día" },
    
    // Mes 3
    { date: "2024-03-01", title: "Contenido viral redes sociales", type: "social", priority: "high", duration: "2 días" },
    { date: "2024-03-05", title: "A/B test email subject lines", type: "email", priority: "medium", duration: "1 día" },
    { date: "2024-03-10", title: "Link building campaña", type: "seo", priority: "high", duration: "5 días" },
    { date: "2024-03-15", title: "Remarketing setup", type: "sem", priority: "medium", duration: "2 días" },
    { date: "2024-03-20", title: "Influencer partnerships", type: "social", priority: "low", duration: "3 días", cost: "€800" },
    { date: "2024-03-25", title: "Email segmentation", type: "email", priority: "medium", duration: "1 día" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'seo': return 'bg-blue-500';
      case 'sem': return 'bg-green-500';
      case 'social': return 'bg-purple-500';
      case 'email': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'seo': return 'SEO';
      case 'sem': return 'SEM';
      case 'social': return 'Social';
      case 'email': return 'Email';
      default: return type;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500';
      case 'medium': return 'border-yellow-500';
      case 'low': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  const currentMonthEvents = events.filter(event => {
    const eventMonth = new Date(event.date).getMonth();
    const targetMonth = new Date().getMonth() + currentMonth;
    return eventMonth === targetMonth;
  });

  const getWeekEvents = (weekStart: number) => {
    return currentMonthEvents.filter(event => {
      const eventDate = new Date(event.date).getDate();
      return eventDate >= weekStart && eventDate < weekStart + 7;
    });
  };

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <Card className="gradient-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Calendario de Marketing
              </CardTitle>
              <CardDescription>
                Planificación automática de actividades para {businessData.businessName}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
                disabled={currentMonth === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="font-medium min-w-20 text-center">
                {months[currentMonth] || `Mes ${currentMonth + 1}`}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCurrentMonth(Math.min(5, currentMonth + 1))}
                disabled={currentMonth === 5}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { type: 'seo', label: 'SEO' },
          { type: 'sem', label: 'SEM' },
          { type: 'social', label: 'Redes Sociales' },
          { type: 'email', label: 'Email Marketing' }
        ].map((item) => (
          <div key={item.type} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`} />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid - Weekly View */}
      <div className="grid gap-6">
        {[1, 8, 15, 22, 29].map((weekStart, index) => (
          <Card key={index} className="gradient-card">
            <CardHeader>
              <CardTitle className="text-lg">
                Semana {index + 1} ({weekStart}-{Math.min(weekStart + 6, 31)} {months[currentMonth]})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {getWeekEvents(weekStart).length > 0 ? (
                  getWeekEvents(weekStart).map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className={`p-4 border-l-4 ${getPriorityColor(event.priority)} bg-card/50 rounded-r-lg hover:bg-card/80 transition-all duration-200`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${getTypeColor(event.type)} text-white`}>
                              {getTypeLabel(event.type)}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {event.priority === 'high' ? 'Alta' : event.priority === 'medium' ? 'Media' : 'Baja'}
                            </Badge>
                          </div>
                          <h4 className="font-medium mb-1">{event.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.duration}
                            </div>
                            {event.cost && (
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />
                                {event.cost}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          {new Date(event.date).getDate()}/{new Date(event.date).getMonth() + 1}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No hay actividades programadas esta semana</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Summary */}
      <Card className="gradient-card">
        <CardHeader>
          <CardTitle>Resumen del Mes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Actividades SEO', count: currentMonthEvents.filter(e => e.type === 'seo').length, color: 'text-blue-500' },
              { label: 'Campañas SEM', count: currentMonthEvents.filter(e => e.type === 'sem').length, color: 'text-green-500' },
              { label: 'Acciones Sociales', count: currentMonthEvents.filter(e => e.type === 'social').length, color: 'text-purple-500' },
              { label: 'Email Marketing', count: currentMonthEvents.filter(e => e.type === 'email').length, color: 'text-orange-500' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-card/30 rounded-lg">
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
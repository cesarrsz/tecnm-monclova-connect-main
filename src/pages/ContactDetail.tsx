// src/pages/ContactDetail.tsx

// --- Todo tu código anterior se mantiene igual, no hay cambios aquí ---
import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Phone, Mail, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChatModal } from "@/components/ChatModal"; // Asegúrate de que la importación tenga llaves {}
import { contacts } from "@/data/mockData";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import logoTecnm from "@/assets/logo-tecnm.png";
import { toast } from "sonner";

const ContactDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  // Cambié el nombre del estado para que coincida con la prop del ChatModal
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const [isCallingModalOpen, setIsCallingModalOpen] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const callIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const callTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Contacto no encontrado</h1>
          <Button onClick={() => navigate("/directory")}>
            Volver al directorio
          </Button>
        </div>
      </div>
    );
  }

  const handleCall = () => {
    setIsCallingModalOpen(true);
    setCallDuration(0);
    
    callIntervalRef.current = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    
    callTimeoutRef.current = setTimeout(() => {
      if (callIntervalRef.current) {
        clearInterval(callIntervalRef.current);
      }
      setIsCallingModalOpen(false);
      setCallDuration(0);
      toast.error(`${contact.name} no pudo responder su llamada`, {
        duration: 4000,
      });
    }, 15000);
  };

  const handleEndCall = () => {
    if (callIntervalRef.current) {
      clearInterval(callIntervalRef.current);
    }
    if (callTimeoutRef.current) {
      clearTimeout(callTimeoutRef.current);
    }
    setIsCallingModalOpen(false);
    setCallDuration(0);
    toast.info("Llamada finalizada");
  };

  // La función que abre el chat
  const handleMessage = () => {
    setIsChatOpen(true);
  };

  const formatCallDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* --- Header y Main Content se mantienen igual --- */}
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <img src={logoTecnm} alt="TecNM" className="h-10" />
            <h1 className="text-xl font-bold">Detalle del Contacto</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="pt-8 pb-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-muted">
                  <img
                    src={avatarPlaceholder}
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">{contact.name}</h2>
                <p className="text-lg text-muted-foreground">
                  {contact.position}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                  Disponibilidad y Ubicación
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Horario</p>
                    <p className="font-medium">{contact.schedule}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Oficina</p>
                    <p className="font-medium">{contact.office}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                  Información de Contacto
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground">Correo</p>
                      <p className="font-medium break-all">{contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="font-medium">{contact.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pb-6">
            <Button
              onClick={handleCall}
              size="lg"
              variant="outline"
              className="gap-2 h-14"
            >
              <Phone className="w-5 h-5" />
              Llamar
            </Button>
            <Button
              onClick={handleMessage}
              size="lg"
              className="gap-2 h-14"
            >
              <Mail className="w-5 h-5" />
              Enviar Mensaje
            </Button>
          </div>
        </div>
      </main>

      {/* AQUÍ ESTÁ LA CORRECCIÓN:
        1. 'open' se cambia por 'isOpen'.
        2. 'onOpenChange' se cambia por 'onClose'.
        3. La función para onClose ahora es () => setIsChatOpen(false).
        4. Se eliminó 'contactName' porque no está en la 'interface ChatModalProps'.
      */}
      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      {/* Calling Modal (sin cambios) */}
      <Dialog open={isCallingModalOpen} onOpenChange={setIsCallingModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Llamando...</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-8 space-y-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-muted">
              <img
                src={avatarPlaceholder}
                alt={contact.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">{contact.name}</h3>
              <p className="text-muted-foreground">{contact.position}</p>
              <p className="text-2xl font-mono text-primary">
                {formatCallDuration(callDuration)}
              </p>
            </div>
            <Button
              onClick={handleEndCall}
              size="lg"
              variant="destructive"
              className="rounded-full w-16 h-16"
            >
              <PhoneOff className="w-6 h-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactDetail;
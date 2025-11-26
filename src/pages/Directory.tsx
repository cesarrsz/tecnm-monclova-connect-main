// PASO 1: Agregamos los imports necesarios
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  ClipboardList,
  Sparkles,
  Wrench,
  Users,
  MessageCircle, // <-- Icono para el botón del chat
} from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import logoTecnm from "@/assets/logo-tecnm.png";
import { Button } from "@/components/ui/button"; // <-- El componente de botón
import { ChatModal } from "@/components/ChatModal"; // <-- El modal del chat

const categories = [
  { id: "profesores", name: "Profesores", icon: GraduationCap },
  { id: "academica", name: "Área Académica", icon: BookOpen },
  { id: "prefectura", name: "Prefectura", icon: ClipboardList },
  { id: "conserjes", name: "Conserjes", icon: Sparkles },
  { id: "mantenimiento", name: "Mantenimiento", icon: Wrench },
  { id: "otros", name: "Otros", icon: Users },
];

const Directory = () => {
  const navigate = useNavigate();

  // PASO 2: Agregamos la variable de estado para controlar el chat
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/personnel/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header (sin cambios) */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-6 flex items-center gap-4">
          <img src={logoTecnm} alt="TecNM" className="h-12" />
          <div>
            <h1 className="text-2xl font-bold">Directorio Institucional</h1>
            <p className="text-sm opacity-90">TecNM Campus Monclova</p>
          </div>
        </div>
      </header>

      {/* Main Content (sin cambios) */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground text-center mb-8">
            Selecciona una categoría para ver el personal
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                icon={category.icon}
                title={category.name}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* PASO 3: Agregamos el botón flotante y el modal del chat */}
      <Button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
        size="icon"
        aria-label="Abrir chat de asistente"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Directory;
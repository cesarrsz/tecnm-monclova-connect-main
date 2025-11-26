import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ContactCard";
import { contacts } from "@/data/mockData";
import logoTecnm from "@/assets/logo-tecnm.png";

const categoryNames: Record<string, string> = {
  profesores: "Profesores",
  academica: "Área Académica",
  prefectura: "Prefectura",
  conserjes: "Conserjes",
  mantenimiento: "Mantenimiento",
};

const PersonnelList = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();

  const filteredContacts = contacts.filter(
    (contact) => contact.category === category
  );

  const categoryName = category ? categoryNames[category] : "Personal";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/directory")}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <img src={logoTecnm} alt="TecNM" className="h-10" />
          </div>
          <h1 className="text-2xl font-bold">{categoryName}</h1>
          <p className="text-sm opacity-90 mt-1">
            {filteredContacts.length}{" "}
            {filteredContacts.length === 1 ? "contacto" : "contactos"}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-3">
          {filteredContacts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron contactos en esta categoría
              </p>
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                name={contact.name}
                position={contact.position}
                onClick={() => navigate(`/contact/${contact.id}`)}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default PersonnelList;

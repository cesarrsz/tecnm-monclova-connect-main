export interface Contact {
  id: string;
  name: string;
  position: string;
  category: string;
  email: string;
  phone: string;
  schedule: string;
  office: string;
}

export const categories = [
  { id: "profesores", name: "Profesores", icon: "GraduationCap" },
  { id: "academica", name: "Área Académica", icon: "BookOpen" },
  { id: "prefectura", name: "Prefectura", icon: "ClipboardList" },
  { id: "conserjes", name: "Conserjes", icon: "Sparkles" },
  { id: "mantenimiento", name: "Mantenimiento", icon: "Wrench" },
  { id: "otros", name: "Otros", icon: "Users" },
];

export const contacts: Contact[] = [
  // Profesores
  {
    id: "1",
    name: "Laura Martínez Gómez",
    position: "Profesora de Bases de Datos",
    category: "profesores",
    email: "laura.martinez@monclova.tecnm.mx",
    phone: "866 321 0001",
    schedule: "Lunes a Jueves 10:00 - 16:00",
    office: "Edificio 2, Cubículo 7",
  },
  {
    id: "2",
    name: "Carlos Alberto Ruiz Torres",
    position: "Profesor de Programación Web",
    category: "profesores",
    email: "carlos.ruiz@monclova.tecnm.mx",
    phone: "866 321 0002",
    schedule: "Lunes a Viernes 8:00 - 14:00",
    office: "Edificio 2, Cubículo 12",
  },
  {
    id: "3",
    name: "María Fernanda López Sánchez",
    position: "Profesora de Inteligencia Artificial",
    category: "profesores",
    email: "maria.lopez@monclova.tecnm.mx",
    phone: "866 321 0003",
    schedule: "Martes a Viernes 9:00 - 15:00",
    office: "Edificio 2, Cubículo 5",
  },
  {
    id: "4",
    name: "José Manuel Hernández Rivera",
    position: "Profesor de Redes de Computadoras",
    category: "profesores",
    email: "jose.hernandez@monclova.tecnm.mx",
    phone: "866 321 0004",
    schedule: "Lunes a Jueves 11:00 - 17:00",
    office: "Edificio 2, Cubículo 9",
  },
  // Área Académica
  {
    id: "5",
    name: "Ana Patricia González Méndez",
    position: "Coordinadora de Servicios Escolares",
    category: "academica",
    email: "ana.gonzalez@monclova.tecnm.mx",
    phone: "866 321 0010",
    schedule: "Lunes a Viernes 8:00 - 16:00",
    office: "Edificio Administrativo, Oficina 201",
  },
  {
    id: "6",
    name: "Roberto Alejandro Pérez Díaz",
    position: "Jefe de División de Estudios Profesionales",
    category: "academica",
    email: "roberto.perez@monclova.tecnm.mx",
    phone: "866 321 0011",
    schedule: "Lunes a Viernes 9:00 - 17:00",
    office: "Edificio Administrativo, Oficina 105",
  },
  {
    id: "7",
    name: "Sandra Ivette Ramírez Castro",
    position: "Coordinadora de Titulación",
    category: "academica",
    email: "sandra.ramirez@monclova.tecnm.mx",
    phone: "866 321 0012",
    schedule: "Lunes a Viernes 8:00 - 15:00",
    office: "Edificio Administrativo, Oficina 203",
  },
  // Prefectura
  {
    id: "8",
    name: "Víctor Alfonso García Vásquez",
    position: "Profesor de Informática",
    category: "profesores",
    email: "victor.garcia@monclova.tecnm.mx",
    phone: "866 321 0020",
    schedule: "Lunes a Viernes 7:00 - 15:00",
    office: "Edificio 2, Cubículo 15",
  },
  {
    id: "9",
    name: "Diana Carolina Morales Luna",
    position: "Asistente de Prefectura",
    category: "prefectura",
    email: "diana.morales@monclova.tecnm.mx",
    phone: "866 321 0021",
    schedule: "Lunes a Viernes 7:00 - 15:00",
    office: "Edificio Principal, Planta Baja",
  },
  // Conserjes
  {
    id: "10",
    name: "Juan Carlos Reyes Ortiz",
    position: "Conserje Turno Matutino",
    category: "conserjes",
    email: "juan.reyes@monclova.tecnm.mx",
    phone: "866 321 0030",
    schedule: "Lunes a Viernes 6:00 - 14:00",
    office: "Edificio de Servicios",
  },
  {
    id: "11",
    name: "Rosa María Flores Gutiérrez",
    position: "Conserje Turno Vespertino",
    category: "conserjes",
    email: "rosa.flores@monclova.tecnm.mx",
    phone: "866 321 0031",
    schedule: "Lunes a Viernes 14:00 - 22:00",
    office: "Edificio de Servicios",
  },
  // Mantenimiento
  {
    id: "12",
    name: "Miguel Ángel Torres Valdez",
    position: "Jefe de Mantenimiento",
    category: "mantenimiento",
    email: "miguel.torres@monclova.tecnm.mx",
    phone: "866 321 0040",
    schedule: "Lunes a Viernes 7:00 - 15:00",
    office: "Taller de Mantenimiento",
  },
  {
    id: "13",
    name: "Francisco Javier Mendoza Silva",
    position: "Técnico en Sistemas Eléctricos",
    category: "mantenimiento",
    email: "francisco.mendoza@monclova.tecnm.mx",
    phone: "866 321 0041",
    schedule: "Lunes a Viernes 8:00 - 16:00",
    office: "Taller de Mantenimiento",
  },
  {
    id: "14",
    name: "Luis Alberto Sánchez Moreno",
    position: "Técnico en Plomería",
    category: "mantenimiento",
    email: "luis.sanchez@monclova.tecnm.mx",
    phone: "866 321 0042",
    schedule: "Lunes a Viernes 7:00 - 15:00",
    office: "Taller de Mantenimiento",
  },
  // Otros
  {
    id: "15",
    name: "Patricia Hernández Medina",
    position: "Asistente Administrativo",
    category: "otros",
    email: "patricia.hernandez@monclova.tecnm.mx",
    phone: "866 321 0050",
    schedule: "Lunes a Viernes 8:00 - 16:00",
    office: "Edificio Administrativo, Recepción",
  },
  {
    id: "16",
    name: "Ricardo Gómez Luna",
    position: "Bibliotecario",
    category: "otros",
    email: "ricardo.gomez@monclova.tecnm.mx",
    phone: "866 321 0051",
    schedule: "Lunes a Viernes 9:00 - 17:00",
    office: "Biblioteca Central",
  },
];

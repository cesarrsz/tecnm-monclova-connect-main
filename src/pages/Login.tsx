import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import logoTecnm from "@/assets/logo-tecnm.png";
import campusBackground from "@/assets/campus-background.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simular validación
    setTimeout(() => {
      if (username && password) {
        navigate("/directory");
      } else {
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${campusBackground})`,
          filter: "blur(4px) brightness(0.7)",
        }}
      />

      {/* Login Card */}
      <Card className="relative w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-6 pb-8">
          <div className="flex justify-center">
            <img src={logoTecnm} alt="TecNM Campus Monclova" className="h-24" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">
              Directorio Institucional
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              TecNM Campus Monclova
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                type="text"
                placeholder="Ej. I21050253"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full h-11 text-base font-semibold"
              disabled={loading}
            >
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

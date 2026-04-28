import { Header } from "./components/Header.jsx";
import { ContenedorPPI } from "./components/ContenedorPPI.jsx";
import { BotonEstado } from "./components/BotonEstado.jsx";

function App() {
  // Datos basados en tu diagrama ER
  const misEntidades = [
    { nombre: "Usuarios", desc: "Almacena credenciales y roles", campos: 5 },
    { nombre: "empleados disponibles", desc: "Inventario del personal", campos: 8 },
    { nombre: "trabajos echos", desc: "Registro de trabajos completos", campos: 4 },
    { nombre: "trabajos pagados", desc: "Tareas en pagadas", campos: 4 }
  ];

  return (
    <main>
      <Header titulo="SILD" grupo="11B" />
      <BotonEstado texto="periodo de pruba del sistema SILD" activo={true} />
      <ContenedorPPI entidades={misEntidades} />
    </main>
  );
}

export default App;
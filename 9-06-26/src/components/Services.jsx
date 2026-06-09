const servicios = [
  {
    icono: "⚡",
    titulo: "Instalaciones Eléctricas",
    descripcion: "Realizamos instalaciones eléctricas seguras para hogares, oficinas y empresas."
  },
  {
    icono: "🔧",
    titulo: "Mantenimiento Eléctrico",
    descripcion: "Inspección y mantenimiento preventivo y correctivo de sistemas eléctricos."
  },
  {
    icono: "💡",
    titulo: "Iluminación LED",
    descripcion: "Diseño e instalación de sistemas de iluminación LED de alta eficiencia."
  },
  {
    icono: "🏠",
    titulo: "Automatización Residencial",
    descripcion: "Implementamos soluciones inteligentes para el control de iluminación y energía."
  },
  {
    icono: "⚙️",
    titulo: "Montaje de Tableros",
    descripcion: "Diseño, ensamblaje e instalación de tableros eléctricos industriales y comerciales."
  },
  {
    icono: "🔋",
    titulo: "Energía Solar",
    descripcion: "Instalación y mantenimiento de sistemas fotovoltaicos para ahorro energético."
  }
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            {"Ofresemos una amplia gama de servicios eléctricos"}
          </p>
        </div>

        {/* 🛠️ PASO 2: Renderiza las tarjetas con servicios.map(...) */}
        <div className="row g-4">

  {servicios.map((servicio, index) => (
    <div className="col-md-4" key={index}>
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <div className="fs-1 mb-3">{servicio.icono}</div>
          <h5 className="card-title">{servicio.titulo}</h5>
          <p className="card-text">{servicio.descripcion}</p>
        </div>
      </div>
    </div>
  ))}

</div>

      </div>
    </section>
  );
}

export default Services;
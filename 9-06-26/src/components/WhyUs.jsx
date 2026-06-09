// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  WhyUs.jsx  (¿Por qué elegirnos?)
//
//  INSTRUCCIONES:
//  1. Define el array "razones" con al menos 4 objetos.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Agrega una imagen en la columna izquierda.
//  3. Escribe 2 párrafos sobre la empresa.
//  4. Usa .map() para renderizar la lista de razones.
//
//  PISTAS:
//  - <div className="row align-items-center"> para las columnas
//  - className="list-unstyled" en <ul> quita los bullets
//  - Placeholder: https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec
// ============================================================

// 🛠️ PASO 1: Define tu array de razones
const razones = [
  {
    icono: "🛡️",
    titulo: "Seguridad Garantizada",
    descripcion: "Cumplimos con todas las normas de seguridad eléctrica para proteger a nuestros clientes."
  },
  {
    icono: "👨‍🔧",
    titulo: "Personal Calificado",
    descripcion: "Contamos con técnicos e ingenieros capacitados y con amplia experiencia."
  },
  {
    icono: "⚡",
    titulo: "Servicio Rápido",
    descripcion: "Atendemos emergencias y proyectos eléctricos de manera eficiente y oportuna."
  },
  {
    icono: "💰",
    titulo: "Precios Competitivos",
    descripcion: "Ofrecemos soluciones de alta calidad a precios justos y accesibles."
  }
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Columna izquierda: imagen */}
          <div className="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
              alt="Técnico eléctrico trabajando"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Columna derecha: texto y razones */}
          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>

            <p className="text-muted mb-4">
              En Voltec nos especializamos en ofrecer soluciones eléctricas
              seguras, eficientes y de alta calidad para hogares, negocios e
              industrias. Nuestro compromiso es garantizar instalaciones
              confiables que cumplan con los más altos estándares del sector.
            </p>

            <p className="text-muted mb-4">
              Contamos con un equipo de profesionales capacitados y con amplia
              experiencia, siempre enfocados en brindar un excelente servicio,
              atención personalizada y resultados duraderos para cada cliente.
            </p>

            {/* 🛠️ PASO 2: Renderiza las razones con .map() */}
            <ul className="list-unstyled">
              {razones.map((razon, index) => (
                <li key={index} className="mb-3">
                  <h5>
                    {razon.icono} {razon.titulo}
                  </h5>
                  <p className="text-muted mb-0">
                    {razon.descripcion}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;
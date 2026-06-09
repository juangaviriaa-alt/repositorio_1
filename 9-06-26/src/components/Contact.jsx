function Contact() {
  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            ¿Necesitas una instalación eléctrica, mantenimiento o asesoría?
            Nuestro equipo está listo para ayudarte. Contáctanos y recibe una
            atención rápida y profesional.
          </p>
        </div>

        <div className="row g-5">

          {/* Columna izquierda: información de contacto */}
          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>

            <ul className="list-unstyled">
              <li className="mb-3">
                📍 Medellín, Antioquia, Colombia
              </li>

              <li className="mb-3">
                📞 +57 300 123 4567
              </li>

              <li className="mb-3">
                📧 contacto@voltec.com
              </li>

              <li className="mb-3">
                🕐 Lunes a Viernes: 8:00 a.m. - 6:00 p.m.
              </li>
            </ul>
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              <div className="row g-3">

                {/* Campo: Nombre */}
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                {/* Campo: Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                {/* Campo: Teléfono */}
                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="form-control"
                    placeholder="300 123 4567"
                  />
                </div>

                {/* Campo: Tipo de servicio */}
                <div className="col-md-6">
                  <label htmlFor="servicio" className="form-label">
                    Tipo de Servicio
                  </label>
                  <select
                    id="servicio"
                    className="form-select"
                  >
                    <option>Seleccione una opción</option>
                    <option>Instalaciones Eléctricas</option>
                    <option>Mantenimiento Eléctrico</option>
                    <option>Iluminación LED</option>
                    <option>Automatización Residencial</option>
                    <option>Montaje de Tableros</option>
                    <option>Energía Solar</option>
                  </select>
                </div>

                {/* Campo: Mensaje */}
                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    className="form-control"
                    rows="5"
                    placeholder="Escribe aquí tu consulta..."
                  ></textarea>
                </div>

                {/* Botón enviar */}
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-warning"
                  >
                    Enviar Solicitud
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
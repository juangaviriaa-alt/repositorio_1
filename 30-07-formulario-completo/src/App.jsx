import React, { useState } from 'react';
import './App.css'; // Opcional para tus estilos

function App() {
  // Estado único para todos los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
    edad: '',
    fechaNacimiento: '',
    experiencia: 5,
    aceptarTerminos: false,
    lenguajes: [],
    modalidad: 'virtual',
    pais: 'Colombia',
    comentarios: '',
    fotoPerfil: null,
    colorFavorito: '#646cff'
  });

  // Estado para la vista previa de la imagen
  const [fotoPreview, setFotoPreview] = useState(null);

  // Estado para almacenar y mostrar el resumen tras el envío
  const [datosEnviados, setDatosEnviados] = useState(null);

  // Expresión regular básica para validar el correo
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const esEmailValido = regexEmail.test(formData.correo);

  // Validaciones generales para habilitar/deshabilitar el botón
  const esEdadValida = Number(formData.edad) > 0;
  const formularioValido = formData.aceptarTerminos && esEmailValido && esEdadValida;

  // Manejador genérico para inputs de texto, número, fecha, select, textarea, etc.
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      // Manejo especial para checkboxes múltiples (lenguajes) vs uno solo (términos)
      if (name === 'aceptarTerminos') {
        setFormData({ ...formData, [name]: checked });
      } else {
        // Lenguajes
        const currentLenguajes = [...formData.lenguajes];
        if (checked) {
          currentLenguajes.push(value);
        } else {
          const index = currentLenguajes.indexOf(value);
          if (index > -1) currentLenguajes.splice(index, 1);
        }
        setFormData({ ...formData, lenguajes: currentLenguajes });
      }
    } else if (type === 'file') {
      const archivo = files[0];
      setFormData({ ...formData, fotoPerfil: archivo });
      if (archivo) {
        // Crear URL temporal para la vista previa
        setFotoPreview(URL.createObjectURL(archivo));
      } else {
        setFotoPreview(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Manejador del envío
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formularioValido) {
      setDatosEnviados(formData);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Registro de Estudiante</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* input type="text" → nombre */}
        <div>
          <label>Nombre:</label><br />
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* input type="email" → correo */}
        <div>
          <label>Correo electrónico:</label><br />
          <input 
            type="email" 
            name="correo" 
            value={formData.correo} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
          {formData.correo && !esEmailValido && (
            <small style={{ color: 'red' }}>Formato de correo no válido.</small>
          )}
        </div>

        {/* input type="password" → contraseña */}
        <div>
          <label>Contraseña:</label><br />
          <input 
            type="password" 
            name="contrasena" 
            value={formData.contrasena} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* input type="number" → edad (con validación > 0) */}
        <div>
          <label>Edad:</label><br />
          <input 
            type="number" 
            name="edad" 
            value={formData.edad} 
            onChange={handleChange} 
            required 
            min="1"
            style={{ width: '100%', padding: '8px' }}
          />
          {formData.edad !== '' && !esEdadValida && (
            <small style={{ color: 'red' }}>La edad debe ser mayor a 0.</small>
          )}
        </div>

        {/* input type="date" → fecha de nacimiento */}
        <div>
          <label>Fecha de nacimiento:</label><br />
          <input 
            type="date" 
            name="fechaNacimiento" 
            value={formData.fechaNacimiento} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* input type="range" → nivel de experiencia (1-10) con valor en tiempo real */}
        <div>
          <label>Nivel de experiencia (1-10): <strong>{formData.experiencia}</strong></label><br />
          <input 
            type="range" 
            name="experiencia" 
            min="1" 
            max="10" 
            value={formData.experiencia} 
            onChange={handleChange} 
            style={{ width: '100%' }}
          />
        </div>

        {/* input type="radio" (grupo) → modalidad (presencial/virtual) */}
        <div>
          <label>Modalidad:</label><br />
          <label style={{ marginRight: '15px' }}>
            <input 
              type="radio" 
              name="modalidad" 
              value="virtual" 
              checked={formData.modalidad === 'virtual'} 
              onChange={handleChange} 
            /> Virtual
          </label>
          <label>
            <input 
              type="radio" 
              name="modalidad" 
              value="presencial" 
              checked={formData.modalidad === 'presencial'} 
              onChange={handleChange} 
            /> Presencial
          </label>
        </div>

        {/* input type="checkbox" (varios) → lenguajes que conoce */}
        <div>
          <label>Lenguajes que conoce:</label><br />
          {['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'].map((lang) => (
            <label key={lang} style={{ marginRight: '15px', display: 'inline-block' }}>
              <input 
                type="checkbox" 
                name="lenguajes" 
                value={lang} 
                checked={formData.lenguajes.includes(lang)} 
                onChange={handleChange} 
              /> {lang}
            </label>
          ))}
        </div>

        {/* select con option → país */}
        <div>
          <label>País:</label><br />
          <select 
            name="pais" 
            value={formData.pais} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="Colombia">Colombia</option>
            <option value="México">México</option>
            <option value="Argentina">Argentina</option>
            <option value="España">España</option>
            <option value="Chile">Chile</option>
            <option value="Perú">Perú</option>
          </select>
        </div>

        {/* input type="color" → color favorito */}
        <div>
          <label>Color favorito:</label><br />
          <input 
            type="color" 
            name="colorFavorito" 
            value={formData.colorFavorito} 
            onChange={handleChange} 
            style={{ width: '60px', height: '40px', border: 'none', cursor: 'pointer' }}
          />
        </div>

        {/* input type="file" → foto de perfil + Vista previa */}
        <div>
          <label>Foto de perfil:</label><br />
          <input 
            type="file" 
            name="fotoPerfil" 
            accept="image/*" 
            onChange={handleChange} 
          />
          {fotoPreview && (
            <div style={{ marginTop: '10px' }}>
              <p>Vista previa:</p>
              <img 
                src={fotoPreview} 
                alt="Vista previa" 
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} 
              />
            </div>
          )}
        </div>

        {/* textarea → comentarios */}
        <div>
          <label>Comentarios:</label><br />
          <textarea 
            name="comentarios" 
            value={formData.comentarios} 
            onChange={handleChange} 
            rows="4" 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* input type="checkbox" (uno solo) → aceptar términos (Obligatorio para habilitar botón) */}
        <div>
          <label style={{ color: !formData.aceptarTerminos ? '#d9534f' : 'inherit' }}>
            <input 
              type="checkbox" 
              name="aceptarTerminos" 
              checked={formData.aceptarTerminos} 
              onChange={handleChange} 
            /> Acepto los términos y condiciones *
          </label>
        </div>

        {/* button type="submit" → enviar */}
        <div>
          <button 
            type="submit" 
            disabled={!formularioValido}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: formularioValido ? '#4CAF50' : '#cccccc', 
              color: 'white', 
              border: 'none', 
              cursor: formularioValido ? 'pointer' : 'not-allowed',
              fontWeight: 'bold',
              width: '100%'
            }}
          >
            Enviar Registro
          </button>
        </div>

      </form>

      {/* Sección de Resumen de Datos Ingresados */}
      {datosEnviados && (
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>Resumen del Registro Exitoso</h3>
          <p><strong>Nombre:</strong> {datosEnviados.nombre}</p>
          <p><strong>Correo:</strong> {datosEnviados.correo}</p>
          <p><strong>Edad:</strong> {datosEnviados.edad}</p>
          <p><strong>Fecha de nacimiento:</strong> {datosEnviados.fechaNacimiento}</p>
          <p><strong>Nivel de experiencia:</strong> {datosEnviados.experiencia}</p>
          <p><strong>Modalidad:</strong> {datosEnviados.modalidad}</p>
          <p><strong>Lenguajes:</strong> {datosEnviados.lenguajes.length > 0 ? datosEnviados.lenguajes.join(', ') : 'Ninguno'}</p>
          <p><strong>País:</strong> {datosEnviados.pais}</p>
          <p>
            <strong>Color favorito:</strong> 
            <span style={{ display: 'inline-block', width: '15px', height: '15px', backgroundColor: datosEnviados.colorFavorito, marginLeft: '8px', verticalAlign: 'middle', border: '1px solid #000' }}></span> 
            {datosEnviados.colorFavorito}
          </p>
          <p><strong>Comentarios:</strong> {datosEnviados.comentarios || 'Sin comentarios'}</p>
          {fotoPreview && (
            <div>
              <strong>Foto de perfil subida:</strong><br />
              <img src={fotoPreview} alt="Perfil" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', marginTop: '5px' }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
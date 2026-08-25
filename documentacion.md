# Guía Integral de Documentación Web (Metáfora del Restaurante)

## 🍽️ 1. Visión General: El Restaurante Digital

| Área | Equivalente en Software | Responsabilidad Principal |
| :--- | :--- | :--- |
| **La Cocina** | **Backend** | Recetas (algoritmos), almacén (base de datos) y normas de higiene (seguridad). |
| **El Comedor** | **Frontend (General)** | Ambiente (UI), montaje de mesas (componentes) y servicio al cliente (UX). |
| **Diseño de Interiores** | **CSS** | Paleta de colores, iluminación, tipografía y adaptabilidad del espacio. |
| **El Personal de Sala** | **JavaScript** | Manejo de eventos, interacción, flujo de datos y lógica del cliente. |
| **La Mueblería Modular** | **React** | Componentes reutilizables con sus props (instrucciones) y hooks (comportamiento). |

---

## 🎨 2. Capa Visual: Documentación de CSS

**Qué documenta:** Aspecto visual, layout, responsive design y animaciones.

* **Variables de Diseño / Tokens (*El Libro de Estilo*):** Define reglas globales de marca (`--color-primary`, `--spacing-md`).
* **Metodologías de Clases (*El Etiquetado BEM*):**
  * **Bloque (`.card`):** La mesa completa.
  * **Elemento (`.card__title`):** El centro de mesa.
  * **Modificador (`.card--featured`):** La mesa decorada para VIP.
* **Living Style Guides:** Catálogos visuales en vivo mediante **Storybook**, **Zeroheight** o **KSS**.

### 💻 Ejemplo de Código CSS Documentado

```css
/**
 * @tokens Color Palette & Spacing
 * Variables globales de diseño para mantener la consistencia del comedor.
 */
:root {
  --color-primary: #ff5722; /* Color principal de marca */
  --spacing-md: 16px;        /* Distancia estándar entre elementos */
}

/**
 * .card (Bloque) - Contenedor principal de tarjeta de producto.
 * .card__title (Elemento) - Título interno de la tarjeta.
 * .card--featured (Modificador) - Variante con borde dorado para destacados.
 */
.card {
  padding: var(--spacing-md);
  background-color: #ffffff;
}

.card__title {
  font-size: 1.25rem;
  color: var(--color-primary);
}

.card--featured {
  border: 2px solid gold;
}

```

---

## ⚙️ 3. Capa Lógica: Documentación de JavaScript

**Qué documenta:** Flujo de datos, eventos, validaciones y estado de la UI.

* **JSDoc:** Etiquetas estructuradas sobre funciones (`@param`, `@returns`, `@example`, `@throws`).
* **TypeScript:** Tipado explícito que documenta y valida el código en tiempo real.
* **README & Diagramas:** Estructura de módulos y flujos asíncronos complejos.

### 💻 Ejemplo de Código JavaScript (JSDoc)

```javascript
/**
 * Calcula el precio total con impuesto.
 *
 * @param {number} precioBase - Valor base del platillo (debe ser mayor a 0).
 * @param {number} [impuesto=0.19] - Porcentaje opcional en decimal (def: 19%).
 * @returns {number} Precio final con impuesto aplicado.
 * @throws {Error} Si el precio base es menor o igual a cero.
 *
 * @example
 * calcularTotal(100); // Retorna 119
 * calcularTotal(100, 0.10); // Retorna 110
 */
function calcularTotal(precioBase, impuesto = 0.19) {
  if (precioBase <= 0) {
    throw new Error("El precio base debe ser mayor a cero.");
  }
  return precioBase + (precioBase * impuesto);
}

```

---

## 🧩 4. Capa Modular: Documentación en React

**Qué documenta:** Componentes reutilizables, sus entradas (`props`), lógica encapsulada (`hooks`) y estado global.

| Elemento React | Herramienta Clave | ¿Qué se documenta? |
| --- | --- | --- |
| **Componentes** | Storybook / TypeScript | Variantes visuales y estados de la UI (cargando, error, activo). |
| **Props** | TypeScript / JSDoc | Tipos de datos, callbacks obligatorios/opcionales y valores por defecto. |
| **Hooks** | JSDoc / TSDoc | Parámetros de entrada, efectos secundarios y valores retornados. |
| **Estado Global** | README / Context API | Propagación de datos globales en la app (Redux, Zustand). |

### 💻 Ejemplo de Código React (TSDoc + Hooks)

```tsx
interface ButtonProps {
  /** Texto que se mostrará dentro del botón */
  label: string;
  /** Función callback ejecutada al hacer clic */
  onClick: () => void;
  /** Variante visual del botón */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Estado de carga que deshabilita la interacción */
  isLoading?: boolean;
}

/**
 * Componente de botón reutilizable con estados de carga e interacción.
 *
 * @example
 * <Button label="Pagar" onClick="{handlePayment}" variant="primary"/>
 */
export const Button = ({
  label,
  onClick,
  variant = 'primary',
  isLoading = false,
}: ButtonProps) => {
  return (
    <button 
      className={`btn btn--${variant}`} 
      onClick={onClick} 
      disabled={isLoading}
    >
      {isLoading ? 'Procesando...' : label}
    </button>
  );
};

```

```typescript
/**
 * Hook personalizado para peticiones HTTP GET.
 *
 * @param url - Endpoint de la API a consultar.
 * @returns Objeto con los datos (`data`), estado de carga (`loading`) y error (`error`).
 *
 * @example
 * const { data, loading } = useFetch<Usuario[]>('/api/usuarios');
 */
export const useFetch = <T>(url: string) => {
  // Lógica interna del hook...
};

```

---

## ⚡ 5. Cuadro Comparativo Global

| Criterio | Documentación CSS | Documentación JS / React | Documentación Backend |
| --- | --- | --- | --- |
| **Pregunta Clave** | *¿Cómo se ve y se adapta el elemento?* | *¿Qué hace el elemento al interactuar y qué props recibe?* | *¿Cómo se procesan, validan y guardan los datos?* |
| **Herramientas** | Stylelint, KSS, Design Tokens, Figma. | JSDoc, TypeScript, Storybook. | Swagger/OpenAPI, Postman, Mermaid (ERD). |
| **Manejo de APIs** | N/A | Documenta **cómo consumirlas** y mostrar sus estados. | Documenta **cómo crearlas** y procesar payloads. |
| **Audiencia** | Diseñadores UX/UI, Devs Frontend. | Devs Frontend, QA. | Devs Backend, DevOps, Arquitectos. |

---

## 💡 6. Caso Práctico Unificado: Botón de Compra / Login

* **Backend:** *“POST /api/checkout procesa el pago, valida en BD y retorna token JWT (200 OK) o error (401).”*
* **JavaScript / React:** *“Valida email en tiempo real, desactiva el botón mediante la prop `isLoading`, envía la petición y redirige al dashboard tras el 200 OK.”*
* **CSS:** *“Define el color primario, padding de 12px, efecto hover con sombra y regla media query para adaptarse a móviles.”*

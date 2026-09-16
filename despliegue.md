
# 1. Cómo llega un usuario a tu sitio

### El navegador busca la dirección IP que corresponde al nombre de la página web. Primero revisa las cachés y, si no la encuentra, consulta un servidor DNS.

### Despues el navegador establece una conexión con el servidor mediante el Handshake de 3 vías:
- SYN: Tu navegador envía un paquete con un mensaje de "sincronización" al servidor.
- SYN-ACK: El servidor responde confirmando la recepción y pidiendo sincronizar también.
- ACK: Tu navegador responde con un "acuse de recibo". La conexión queda establecida.

### Cuando entras a una página con HTTPS, el navegador necesita asegurarse de que la comunicación sea privada y de que estás hablando con el servidor correcto.

### Después de establecer la conexión, el navegador necesita decirle al servidor qué quiere obtener.

### El servidor recibe la petición, la procesa y después responde. El servidor devuelve la información y un código de estado el cual permite entrar a la pagina web.

### El navegador recibe el HTML, descarga recursos como CSS e imágenes y ejecuta JavaScript para finalmente mostrar la página en pantalla.

#

# 2. DNS

### La DNS es el traductor de la  dirección IP , de textos a números se le llama la agenda de contactos de internet por que funciona y tienen el mismo significado que una agenda del móvil.

### Los navegadores no buscan o se comunican con un solo servidor si no que siguen una jerarquía :
- Resolver recursivo: es el detective del proceso , es el que recibe tu petición como google o cualquier otro operador. Si tu petición no está en el la memoria de este lo busca en la jerarquía hasta encontrarla.
- Servidores raíz: es la primera parada del detective y es el que lee el tipo de dominio que es la petición del detective ejemplo: cuando buscas una página termina en .com el root server lee el .com y te direcciona al encargado de ese dominio.
- Servidores TLD: son los servidores de los dominios de nivel superior como .com, .org ,.net , .co y  con esta información lo envía al dominio donde los servidores autoritativos  para que le dé la IP de la web.
- Servidores autoritativos: es la última parada del detective y en donde se encuentra la información IP  y se la da al detective para que este regrese a tu navegador y se abra la página.

### Tipos de registro DNS :

- A Y AAAA : estos son para apuntar al nombre de un dominio directamente a la IP de forma física del servidor web siendo A para el protocolo antiguo y AAAA para el moderno.
- CNAME(canonical name) 
Es un alias que apunta un nombre a otro nombre de dominio. No a una IP son como las subdivisiones del dominio para que apunten a la web.
- Alias/ANAME: sirve para los dominios que son nombre y no IP es como un CNAME.
- MX: indica a qué servidores de correos deben enviarse los emails para que te llegue la información.
- Txt: permite al administrador de un dominio meter por máquinas para confugurar aspectos de seguridad y verificación. 
- SFF: es la verificación de la lista de quienes pueden enviar correos en nombre de tu dominio, esto para evitar suplantaciones.
- DKIM: es la firma de tu dominio pública que especifica que el correo si es enviado por ti.
- Name server: cómo su nombre lo indica es la especificación de a qué servidor autoritativo pertenece ese dominio, por si hay dudas o preguntas.
- Soa: es como la carpeta de presentación de tu zona DNS, esta contiene el servidor maestro, el correo del administrador, el número de serie de la actualización y los tiempos de espera.

### TTL: sigifica el tiempo de vida de un registro DNS, es un tiempo medido en segundos y cuando ese tiempo llegue a cero necesita preguntarle a tu segundos autoritativo por ti, además los cambios no se expresan inmediatamente por qué el registro DNS su dirección IP cambió pero las personas tienen la antigua dirección o DNS.

### Propagación DNS: es el tiempo que tardan los servidores DNS de todo el mundo en conocer tus cambios remozados en tu dominio actualmente tarda entre 15 minutos o un par de horas.
#

# 3. Dominios

### Un registrador es la empresa donde compras o registras el nombre de dominio, mientras que el proveedor de DNS, es el servicio que administra la información DNS de tu dominio y el Hosting, es el servicio que proporciona el servidor donde están guardados los archivos de tu página web.

### los TLD genéricos, son extensiones que no representan un país específico y identifican un país o territorio. Los .com, .dev y .app son gTLD, mientras que .co es un ccTLD. .com.co es un dominio de segundo nivel dentro de .co.

### Un WHOIS es un servicio que permite consultar información sobre un nombre de dominio registrado y la privacidad de dominio es una función que permite ocultar o limitar la exposición de datos personales del propietario del dominio en los registros públicos.

### Los nameservers son servidores que le indican a Internet dónde encontrar la información DNS de un dominio y apuntar el dominio a otro proveedor significa cambiar los nameservers del dominio para que otro proveedor sea quien gestione su DNS.

### El precio de un .com, es de 6.79 Dolares y el de un .co 7.98 Dolares, en la pagina Namecheap mientras que en la pagina de GoDaddy el precio de un .com dependee de la promocion y el .co vale desde 1 Dolar. En el primer año normalmente tiene una promoción para atraer nuevos clientes. Después de ese período, el dominio pasa a cobrarse a su tarifa normal de renovación.

# 4. HTTPS y certificados

### TLS/SSL: Son los protocolos de seguridad para proteger (cifrar la comunicación del navegador y el servidor), SSL es la versión antigua y TLS es la moderna y mejorada.

### Autoridad certificadora y que es let’s Encrypt: La autoridad certificadora es la validación de quien solicita un certificado para un dominio sea realmente su dueño. Y let’s Encrypt es una autoridad certificadora gratuita, automatizada y de código abierto su fin es que todo el mundo logre tener una HTTPS.

### DV, OV y EV: son los certificados clasificados depende la investigación realizada por la autoridad certificadora. El DV es la que pide la información básica siendo ideal para blogs, webs personales y pymes. El OV es la información intermedia ya son empresas medianas, corporativas y escuelas. Y el EV la máxima investigación son para empresas grandes, bancos, pasarelas de pago y demás.

### Certificado wildcard: es un único certificado que protege un dominio principal y todos sus subdominios.

### Error: "Certificado no válido para este nombre" (Common Name Mismatch)Este error ocurre cuando el navegador descarga el certificado SSL del servidor, pero el nombre de dominio grabado dentro del certificado no coincide exactamente con la URL que escribiste en la barra de direcciones.¿Por qué aparece al configurar un dominio personalizado?Es el problema más típico cuando conectas un dominio propio a plataformas como Shopify, Webflow, Firebase o un nuevo hosting.

### HSTS : Es una obligación de seguridad ya que cualquier atacante podría interferir si la página es http y no https.

# 5. Modelos de alojamiento

### CDN: Es una red global de servidores distribuidos geográficamente que trabajan juntos para entregar contenido de internet de la manera más rápida, esto ayuda a que cualquier persona del mundo pueda acceder a tu web en cuestión de milisegundos, a el tráfico de tu web para que no se caiga.

### Diferencia entre sitio dinámico y estático: En el sitio estático la web está lista y el dinámico son cambios de HTML en tiempo real.

### Por qué una app de React (Vite/CRA) es un sitio estático al compilarse: Cuando desarrollas en React, trabajas con componentes vivos pero al momento de compilarlos estos se convierten en archivos.

### SPA: Un SPA es una aplicación web que carga un único archivo HTML en la primera visita, lo que quiere decir que cuando un usuario navega por la página y se mueve entre páginas. No cambia en sí de página solo que JavaScript modifica dibuja la nueva. El problema de esto es que como todo está en una carpeta, el hosting tiene que dar constantemente una URL nueva lo que a su vez como todo está en un archivo al momento de recargar o reiniciar la página está da un error 404 por qué en sí en donde te metiste no existe ya que todo es un solo archivo.

# 6. Comparativa de plataformas

| Plataforma | Plan gratuito: ancho de banda, builds y tamaño | ¿Variables de entorno en el build? | ¿SPA sin configuración extra? | ¿Backend / funciones serverless? | ¿Dominio personalizado gratis? ¿HTTPS automático? | ¿Preview por Pull Request? |
|---|---|---|---|---|---|---|
| GitHub Pages | 100 GB/mes; 10 builds/hora; límite de 1 GB por sitio/repositorio recomendado |  No directamente |  No; normalmente requiere configuración de rutas |  No serverless/backend |  Sí;  HTTPS |  No de forma nativa |
| Netlify | 100 GB/mes; 300 min de build/mes; 10 GB de almacenamiento |  Sí |  No; requiere `_redirects` o configuración equivalente |  Sí, Functions |  Sí;  HTTPS/SSL |  Sí |
| Vercel | 100 GB de transferencia; 6.000 min de build; archivos estáticos de hasta 100 MB |  Sí |  Sí, especialmente con frameworks compatibles |  Sí, Vercel Functions |  Sí;  HTTPS/SSL |  Sí |
| Cloudflare Pages | Sin límite general de ancho de banda; 500 builds/mes; 25 MiB por archivo; 20.000 archivos |  Sí |  No siempre; puede requerir `_redirects` |  Sí, Pages Functions/Workers |  Sí;  HTTPS |  Sí |
| Render | Límite mensual de ancho de banda y minutos de pipeline según el plan; límites dependen del servicio |  Sí |  No necesariamente; permite configurar rewrites |  Sí, mediante Web Services; no es serverless tradicional |  Sí;  TLS automático |  Sí, previews para servicios/sitios Git |

### Elegiria Vercel, despues de todo tiene unas funciones mas interesantes que tiene el resto de apps.

# 7.

### Qué es BaaS: Es una plataforma que automatiza y gestiona la infraestructura del lado del servidor ¿así cómo? Sí, te permite construir bases de datos, autentificación y almacenamiento desde tu frontend a través de APIs y SDKs con la facilidad de que no tengas que programar todo desde cero. Supabase es uno de los más famosos y este ofrece cinco componentes principales; postgreSQL, auth, storage, realtime y functions.

### Anonkey: Es la clave pública de tu proyecto Supabase y pero no otorga acceso libre a los datos, es específicamente para tu frontend.

### Service role key: La que jamás se debe exponer en el frontend, se salta las RLs y tiene acceso libre a tus bases de datos e información.

### RLS: Son las políticas de seguridad de tu proyecto, te permite indicar que puede hacer o no hacer un usuario en este. Su importancia radica en que si está desactivada cualquier persona que tenga la anon key pide copiar tus bases de datos.

### sql:
- Permitir que los usuarios lean solo sus propias filas
CREATE POLICY "Los usuarios pueden ver sus propios registros" 
ON turesponsabilidad.tus_datos -- Cambia por el nombre de tu esquema y tabla
FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

- Permitir que los usuarios actualicen solo sus propias filas
CREATE POLICY "Los usuarios pueden editar sus propios registros" 
ON turesponsabilidad.tus_datos 
FOR UPDATE 
TO authenticated 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);


### Configuración de CORS y Site URL / Redirect URLs: El Site URL es la URL principal de tu app o web, y las Redirect URLs son las rutas permitidas para que el sistema redirija al usuario para que confirme email o iniciar sesión con Google. Si tienes un localhost o entorno local cuando un usuario intente registrarse o recuperar su contraseña, fallará por que él no tiene tu computadora y solo verá unas páginas en blanco o errores por eso es importante configurar una URL de producción.

### Límites de Supabase: Supabase es gratuito pero no para ciertas cosas, tus proyectos tienen que estar abiertos por lo menos una vez a la semana ya que si no estos serán pausados por ahorro de recursos y además tienes un límite de 500 MB para la base de datos, 1 GB de espacio para almacenamiento, 50.000 usuarios activos mensuales y 500.000 ejecuciones mensuales.

# 8. Variables de entorno y seguridad

### Una variable de entorno es un valor que el programa puede utilizar sin tener que escribirlo directamente dentro del código.

### El archivo .env suele contener información privada, como claves y contraseñas. Si subes .env a GitHub, esa información podría quedar expuesta a otras personas.

### Las variables VITE_, estas variables del archivo .env no están disponibles automáticamente en el código del frontend. Toda variable que tenga el prefijo VITE_ se incluye en el código final (bundle) que recibe el navegador. Por lo tanto, es pública. Todo lo que Vite expone con VITE_ termina siendo accesible desde el navegador.

### Un GitHub Secret es un dato privado que GitHub guarda de forma protegida y que puede utilizar durante el proceso de construcción o despliegue de tu proyecto y un secreto de runtime en servidor es un secreto que permanece en el servidor mientras la aplicación está funcionando.

| | GitHub Secret | Secreto de runtime |
|---|---|---|
| **Cuándo se usa** | Durante el build o despliegue | Mientras el servidor ejecuta la aplicación |
| **Dónde está** | GitHub Actions / entorno de CI | Servidor o backend |
| **¿Debe llegar al navegador?** |  No |  No |
| **Ejemplo** | Token para realizar un despliegue | Contraseña de una base de datos |
| **Objetivo** | Proteger datos durante el proceso de construcción o despliegue | Mantener secretos privados durante la ejecución |

### Si accidentalmente subiste una contraseña, API key o token a GitHub, no basta con borrar el archivo o hacer otro commit. Aunque lo borres después, la clave puede seguir existiendo en el historial de Git y alguien podría haberla visto o copiado y hay unos pasos que debes seguir si pasa y son los siguientes:

- Rotar o revocar la clave 🔑
Lo primero es ir al servicio donde obtuviste la clave y invalidarla. Después generas una nueva.

#### Esta es la acción más importante:

- Eliminar la clave del proyecto
Quita la clave del código y utiliza una variable de entorno:

-API_KEY=tu_nueva_clave

### Y agrega .env al .gitignore:

- Limpiar el historial de Git 
Si la clave estuvo en un commit, puedes eliminarla del historial utilizando herramientas de reescritura de historial, como git filter-repo.

- Revisar el repositorio
Comprueba que la clave antigua ya no esté en archivos, commits o configuraciones.

### Lo más importante
Clave expuesta, REVOCAR / ROTAR, Eliminar del código, Limpiar historial, Usar variables de entorno.

### y recuerda

Borrar el commit NO hace segura la clave. Si alguien ya la vio, debes asumir que está comprometida y revocarla o cambiarla primero.

# 9. Build y despliegue

### Npm run build y carpeta dist/: Cuando ejecutas npm run build estás empaquetando y optimizando el código de tu proyecto para que cualquier persona del mundo pueda verlo sin necesidad de instalar las dependencias. Y la carpeta dist/ es el producto final de ese comando.

- *Minificación*: Elimina por completo todos los espacios en blanco, saltos de línea, comentarios del código y renombra las variables largas por letras cortas.
- *Tree Shaking (Sacudida del árbol)*: Imagina tu código y tus librerías instaladas como un árbol. El empaquetador "sacude" ese árbol para eliminar el código muerto que importaste pero que nunca estás usando en ninguna parte de la aplicación, evitando meter basura en producción.
- *Code Splitting (División de código)*: En lugar de meter absolutamente toda tu aplicación en un único archivo JavaScript gigantesco, divide el código en "paquetes" más pequeños (chunks). Por ejemplo, el código del /dashboard solo se descargará cuando el usuario decida entrar a esa sección, haciendo que la carga inicial de la página principal sea instantánea.
- *Hashing de nombres de archivo*: El empaquetador inyecta un código único y aleatorio en el nombre de tus archivos de producción (por ejemplo, index-7a8b9c.js).

### ¿Qué es CI/CD y qué es GitHub Actions?:
 *CI/CD*: es una práctica de desarrollo automatizada esta se encarga de revisar tu código subido en GitHub y el CD se encarga de que subirlo a tu hosting de producción si pasa la revisión.

*GitHub Actions*: es la plataforma nativa de lo antes mencionado se encarga de decirle a la nube de GitHub que cada que alguien haga git push se haga lo anterior.

### Desplegar desde una rama vs desplegar con un workflow de Actions: La primera es la tradicional en donde tú haces todos los comandos, tu repositorio se llena de código y depende de tu PC para la página de producción. La segunda es la moderna en donde subes únicamente el código fuente limpio a la rama main, un servidor se encarga de compilarlo en la nube y publicarlo internamente, no se llena tu repositorio de código ilegible y es independiente de tu PC.
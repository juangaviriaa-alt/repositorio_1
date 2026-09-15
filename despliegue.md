
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

### Es un sistema que traduce los nombres de las páginas web a direcciones IP que los dispositivos pueden entender. En internet la DNS guarda la IP que ya allas buscado para luego encontrarla mas facil.

### Cuando se busca alguna cosa se pueden seguir los siguientes noveles:
- Root Servers: Son el punto de inicio donde no conocen la IP de la página, pero indican dónde encontrar los servidores que manejan el dominio.
- TLD Servers: TLD significa Top-Level Domain. Se encargan de extensiones como .com, .org, .co. el TLD de .com es el que indica donde encontrar una pagina.
- Servidor autoritativo: Es el que sí tiene la información oficial del dominio, incluyendo la dirección IP correspondiente.
- Resolver recursivo: Es el servidor DNS que normalmente consulta tu dispositivo. Va preguntando a los diferentes servidores hasta encontrar la respuesta y finalmente le entrega la IP a tu navegador.

# 3. Dominios

### Un registrador es la empresa donde compras o registras el nombre de dominio, mientras que el proveedor de DNS, es el servicio que administra la información DNS de tu dominio y el Hosting, es el servicio que proporciona el servidor donde están guardados los archivos de tu página web.

### los TLD genéricos, son extensiones que no representan un país específico y identifican un país o territorio. Los .com, .dev y .app son gTLD, mientras que .co es un ccTLD. .com.co es un dominio de segundo nivel dentro de .co.

### Un WHOIS es un servicio que permite consultar información sobre un nombre de dominio registrado y la privacidad de dominio es una función que permite ocultar o limitar la exposición de datos personales del propietario del dominio en los registros públicos.

### Los nameservers son servidores que le indican a Internet dónde encontrar la información DNS de un dominio y apuntar el dominio a otro proveedor significa cambiar los nameservers del dominio para que otro proveedor sea quien gestione su DNS.

### El precio de un .com, es de 6.79 Dolares y el de un .co 7.98 Dolares, en la pagina Namecheap mientras que en la pagina de GoDaddy el precio de un .com dependee de la promocion y el .co vale desde 1 Dolar. En el primer año normalmente tiene una promoción para atraer nuevos clientes. Después de ese período, el dominio pasa a cobrarse a su tarifa normal de renovación.

# 6.

| Plataforma | Plan gratuito: ancho de banda, builds y tamaño | ¿Variables de entorno en el build? | ¿SPA sin configuración extra? | ¿Backend / funciones serverless? | ¿Dominio personalizado gratis? ¿HTTPS automático? | ¿Preview por Pull Request? |
|---|---|---|---|---|---|---|
| GitHub Pages | 100 GB/mes; 10 builds/hora; límite de 1 GB por sitio/repositorio recomendado |  No directamente |  No; normalmente requiere configuración de rutas |  No serverless/backend |  Sí;  HTTPS |  No de forma nativa |
| Netlify | 100 GB/mes; 300 min de build/mes; 10 GB de almacenamiento |  Sí |  No; requiere `_redirects` o configuración equivalente |  Sí, Functions |  Sí;  HTTPS/SSL |  Sí |
| Vercel | 100 GB de transferencia; 6.000 min de build; archivos estáticos de hasta 100 MB |  Sí |  Sí, especialmente con frameworks compatibles |  Sí, Vercel Functions |  Sí;  HTTPS/SSL |  Sí |
| Cloudflare Pages | Sin límite general de ancho de banda; 500 builds/mes; 25 MiB por archivo; 20.000 archivos |  Sí |  No siempre; puede requerir `_redirects` |  Sí, Pages Functions/Workers |  Sí;  HTTPS |  Sí |
| Render | Límite mensual de ancho de banda y minutos de pipeline según el plan; límites dependen del servicio |  Sí |  No necesariamente; permite configurar rewrites |  Sí, mediante Web Services; no es serverless tradicional |  Sí;  TLS automático |  Sí, previews para servicios/sitios Git |

### Elegiria Vercel, despues de todo tiene unas funciones mas interesantes que tiene el resto de apps.
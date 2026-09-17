#
# Parte 1 - Investigación teórica

## 2.  Cómo se crea una cookie

## El servidor utiliza el encabezado:
- Cookie
### Este se utiliza para guardar un dato como por ejemplo: Imagina que entras a una página y el servidor responde:
- Set-Cookie: usuario=Juan
### El navegador guarda esa cookie. Después, cuando haces otra petición al mismo sitio, puede enviar:
- Cookie: usuario=Juan
### Así el servidor sabe que esa petición está asociada con el usuario llamado Juan.

## Una cookie en javascript se puede utilizar con: 
- document.cookie
### Este lo puedes utilizar para crear varuias cookie. La cual se puede leer como:
- console.log(document.cookie);
### Mientras que el servidor lu puede mostrar como Usuario=Juan. 
### Aunque el document.cookie tiene su parte mala porque, su API es bastante limitada y poco práctica, un ejemplo:
#### Digamos que tienes varias cookie, entonces lo que pasa es que devuelve todas las cookie como si fuera una cadena de texto. Por lo que si quieres que las cookie aparescan de forma separada por cada accion que hagas en ves de que aparescan todas, se deben poner las cookie de forma aparete y buscarlas de forma manual. Een el cual tienes que escribir manualmente opciones como max-age, path, etc.

| | Cookie creada por el servidor | Cookie creada por JavaScript |
|---|---|---|
| **¿Quién la crea?** | El servidor | El código JavaScript del navegador |
| **Cómo se crea** | Con `Set-Cookie` en una respuesta HTTP | Con `document.cookie` |
| **¿Puede usar `HttpOnly`?** |  Sí |  No |
| **¿JavaScript puede leerla?** |  Si tiene `HttpOnly` |  Sí |
| **Uso común** | Sesiones y autenticación | Preferencias y configuraciones |
| **Ejemplo** | `Set-Cookie: session=abc123; HttpOnly` | `document.cookie = "tema=oscuro"` |

# Atributos de cookie

### Un expires es un indicador de la fecha maxima hasta la que esta una cookie y un max-age es otro indicador el cual puedes poner el tiempo que puede estar esa cookie y una cookie de sesión no tiene ninguno de los dos, osea que se puede decir que es una cookie que se queda sin borrar despues de un tuempo concreto.

### Un doaminio Indica qué dominio puede recibir la cookie., Por ejemplo:

- Set-Cookie: usuario=Juan; Domain=ejemplo.

### Las cookie pueden enviarse al dominio y segun las reclas del domine tambien se envia a sus subdominios y si no se usa el domine el navegador la considera una cookie host-only, por lo cual la cookie solo funciona el el sitio donde se hizo esa accion. Mientras que un Path indica para qué rutas del sitio se enviará la cookie ya sea a un lugar principal a a un subdominio.

### que pasa si se usa un secure por un servidor por http://?. Es un atrivuto el cual solo debe enviarse mediante una conexión HTTPS segura.
###  Si estás en:

- https://ejemplo.com

### La cookie puede enviarse. Pero si estás en:

- http://ejemplo.com

### El navegador no enviará esa cookie en una petición HTTP normal y si de cuasualidad si se hace el secure, el servidor en http:// puede ser rechasado por este mismo.


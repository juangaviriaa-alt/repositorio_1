let usuario = "gavipro45";
let contrasena = "madrid24";

if (usuario === "") {
  console.log("Error: El nombre de usuario no puede estar vacío.");
} else if (contrasena.length < 8) {
  console.log("Error: La contraseña debe tener al menos 8 caracteres.");
} else {
  console.log("Login exitoso");
}
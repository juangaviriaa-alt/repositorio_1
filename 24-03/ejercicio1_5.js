let x ="'x' esta fuera";
{
    let y="'y'esta dentro";
}

console.log(x);
console.log(y);

//al poner el console.log de la "y" da un error porque la variable "y" esta definida dentro del bloque de codigo, por lo que no se puede acceder desde fuera del bloque en el que esta la "y".
Create database Empleadores
Use Empleadores
Create table Empleadores(
ID_E-Int Primary key,
Nombre_E-Varchar,
Apellidos_E-Varchar,
Forma_Pago-ENUM);

// En el Int se guarda el ID del empleador, mientras que en los Varchar se guarda el nombre y los apellidos del empleador. En el ENUM se guarda la forma de pago que puede ser semanal, quincenal o mensual.
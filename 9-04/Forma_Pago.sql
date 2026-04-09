create database Forma_Pago
Use Forma_Pago
Create tablr Forma_Pago(
ID_TR_EF-Int Primary key,
Transferencia-ENUM,
Efectivo-ENUM);

// En el Int se guarda el ID de la forma de pago que se le dara al trabajador, minetras que en los ENUM se guarda si el pago se hara por transferencia o en efectivo.
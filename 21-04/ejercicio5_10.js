let saldo=500000;
const transacciones=[10000, -20000, 5000, -14000, -500000];
for(const monto of transacciones){
    if (monto>0){
        saldo+=monto;
        console.log(`deposito de $${monto.toLocaleString()}: exito`);
    }else{
        const retiro=Math.abs(monto);
        if(retiro>saldo){
            console.log(`retiro de $${retiro.toLocaleString()}: fondos insuficientes`);
        }else{
            saldo-=retiro;
            console.log(`retiro de $${retiro.toLocaleString()}: exito`);
        }
    }
}
console.log("____________________________________________");
console.log(`Saldo final: $${saldo.toLocaleString()}`);
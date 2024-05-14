// let totalApagar = 0;
// let productos = Number(prompt("¿Cuantos productos desea llevar?"));

// for (let i = 1; i <= productos; i++) {
//   nombre = prompt("¿Qué producto desea llevar?");
//   cantidad = Number(prompt("¿Cuántas unidades?"));
//   const precio = Number(prompt("¿Cuánto sale cada unidad?"));
//   const subtotal = cantidad * precio;
//   console.log("El precio por " + cantidad + " " + nombre + " es: " + subtotal);
//   totalApagar = totalApagar + subtotal;
// }

// switch (productos>0) {
//   case true:
//     console.log("El total a pagar es: " + totalApagar);
//     alert("El total a pagar es: " + totalApagar);
//     break;
//   case false:
//     console.log("No llevó ningun producto");
//     alert("No llevó ningun producto");
//     break;
// }


const comprar = () => {
  let totalApagar = 0;
  let productos = Number(prompt("¿Cuantos productos desea llevar?"));
  for (let i = 1; i <= productos; i++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    console.log("El precio por " + cantidad + " " + nombre + " es: " + subtotal);
    totalApagar = totalApagar + subtotal;
  }
  console.log(totalApagar);
  return totalApagar;
};

comprar();

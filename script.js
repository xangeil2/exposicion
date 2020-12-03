//EJEMPLO DE CALLBACK

let inicio = function(valor, callback) {
    if (typeof callback === 'function') {
        callback(valor);
    } else {
        console.log(valor);
    }
}
inicio("Pablito", function(valor) {
    console.log("Bienvenido " + valor)
});


//EJEMPLO DE PROMISES




//EJEMPLO DE ASYNC AWAIT


let nota1 = 10;
let nota2 = 10;
let promedio = (nota1 + nota2) / 2;

function sumar() {
    return new Promise((resolved, reject) => {
        console.log("calculando..");
        setTimeout(() => {
            if (promedio >= 13) {
                resolved("aprobaste")
            } else {
                reject("reprobaste")
            }
        }, 2000)
    })
};

function promediado() {
    return new Promise((resolved, reject) => {
        if (promedio >= 13) {
            resolved("pasas de ciclo");
        }
    })
}


//PRIMER EJEMPLO

// sumar().then(res => {
//     console.log(res);
// }).catch(error => {
//     console.log(error);
// })

// promediado().then(res => {
//     console.log(res);
// }).catch(error => {
//     console.log(error);
// })

//SEGUNDO EJEMPLO

// let info = sumar();

// info.then(notas => {
//         console.log(notas);
//         return promediado();
//     })
//     .then(promediado => {
//         console.log(promediado);
//     })
//     .catch(error => {
//         console.log(error);
//     });


//TERCER EJEMPLO
// async function promedioFinal() {
//     try {
//         let sumando = await sumar();
//         let promediando = await promediado();
//         console.log(sumando);
//         console.log(promediando);
//     } catch (error) {
//         console.log(error);
//     }
// }
//promedioFinal();
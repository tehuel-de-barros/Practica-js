const encuesta = () => { 
    let total = 0;

    class Productos {
        constructor(id,nombre){
            this.id = id;
            this.nombre = nombre;
        }
    }
    const select = [];

    select.push(new Productos(001, "Intel"));
    select.push(new Productos(002, "AMD"));

    let eleccion = document.createElement("div");
    eleccion.innerHTML = "<h3>Su elección fue:</h3>";
    document.body.appendChild(eleccion);


    let decision = parseInt(prompt("Elija cuidadosa mente el fabricante favorito de procesadores a su entender: \n1-Intel \n2-AMD \nSi prefiere no responder presione 0"));
    while(decision != 0){ 
        switch(decision){
            case 1: total = total + select[0].nombre;

            let case1 = document.createElement("p");
            case1.innerHTML = select[0].nombre;
            document.body.appendChild(case1);
            break;

            case 2: total = total + select[1].nombre;

            let case2 = document.createElement("p");
            case2.innerHTML = select[1].nombre;
            document.body.appendChild(case2);
            break;

            default:alert("No es una opcion posible")
        }
        break;
    }
    
    // let eleccionFinal = document.getElementById("final");
    // eleccionFinal.innerHTML = "<h2>Su producto fue</h2>" + total;
    // document.body.appendChild(eleccionFinal);
    
}


encuesta();

const f5 = () => { 
    location.reload();
}
let = document.getElementById("boton_recarga");
boton_recarga.addEventListener("click", encuesta);

const log = (nombre) => { 
    alert("hola " + nombre);
}

let = document.getElementById("logIn");
logIn.addEventListener("click", () => log(prompt("Ingrese su usuario")));


color = () => {
    let element = document.getElementById("myID");
    element.style.backgroundColor='#FF0000';
    }
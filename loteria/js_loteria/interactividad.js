let num_tableros = 4;

function crearTablero(){
    for(i=1; i <= num_tableros; i++){
        //declaro mi componente
        let tablero = document.createElement("div");
        //Atributos de mi boton
        tablero.id = "tablero"+i;
        tablero.innerHTML = "me estoy creando tablero"+i;
        document.getElementById("cTablero").appendChild(tablero);
        document.getElementById("tablero"+i).style.backgroundColor = "#ffffff";
        document.getElementById("tablero"+i).style.height = "350px";
        document.getElementById("tablero"+i).style.width = "350px";
        document.getElementById("tablero"+i).className = "col-md-4";

        for(j=1; j <= 16; j++){
            let carta_Tab = document.createElement("div");
            let imagen = document.createElement("img");

            carta_Tab.id = "Tab_"+i+"Carta"+j;
           // carta_Tab.innerHTML = ""+j;
            imagen.src = "./img_loteria/diablo.png"
            imagen.id = "Tab_"+i+"img"+j;
            document.getElementById("tablero"+i).appendChild(carta_Tab);
            document.getElementById("Tab_"+i+"Carta"+j).appendChild(imagen);
            document.getElementById("Tab_"+i+"Carta"+j).className = "col-4"
            document.getElementById("Tab_"+i+"img"+j).style.height = "20px";
            document.getElementById("Tab_"+i+"img"+j).style.width = "20px";


           
        
        }
        
        
       
    }
}

crearTablero();

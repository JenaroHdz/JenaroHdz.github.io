let num_tableros = 6;

imagen = "diablo.png";
function crearTablero(){
    
    for(i=1; i <= num_tableros; i++){
        //declaro mi componente
        let tablero = document.createElement("div");
        //Atributos de mi boton
        tablero.id = "tablero"+i;
        document.getElementById("cTablero").appendChild(tablero);
     //   document.getElementById("tablero"+i).className = "col-md-5 espacio";
    //    document.getElementById("tablero"+i).style.marginLeft = "10px";
        document.getElementById("tablero"+i).style = "float:left";
        document.getElementById("tablero"+i).style.width = "470px";
      
        document.getElementById("tablero"+i).style.margin = "15px";
        document.getElementById("tablero"+i).style.backgroundColor = "rgb(6, 107, 173)";
        document.getElementById("tablero"+i).style.border = "solid 1px";
        document.getElementById("tablero"+i).style.padding = "10px";
        


        for(j=1; j <= 16; j++){
            let carta_Tab = document.createElement("div");
            let imagen = document.createElement("img");

            carta_Tab.id = "Tab_"+i+"Carta"+j;
           // carta_Tab.innerHTML = ""+j;
            imagen.src = "./img_loteria/palma.png";
            imagen.id = "Tab_"+i+"img"+j;
            document.getElementById("tablero"+i).appendChild(carta_Tab);
            document.getElementById("Tab_"+i+"Carta"+j).appendChild(imagen);            
            document.getElementById("Tab_"+i+"Carta"+j).style = "float:left";
            document.getElementById("Tab_"+i+"Carta"+j).style.margin = "5px";
            document.getElementById("Tab_"+i+"Carta"+j).style.height = "160px";
            document.getElementById("Tab_"+i+"Carta"+j).style.paddingTop = "25px";
            document.getElementById("Tab_"+i+"Carta"+j).style.border = "solid 1px";
            document.getElementById("Tab_"+i+"img"+j).style.height = "120px";
            document.getElementById("Tab_"+i+"img"+j).style.width = "100px";
           // document.getElementById("Tab_"+i+"img"+j).style.margin = "2px";
            document.getElementById("Tab_"+i+"img"+j).style.border = "solid 1px";
        
        }        
    } 
}

crearTablero();

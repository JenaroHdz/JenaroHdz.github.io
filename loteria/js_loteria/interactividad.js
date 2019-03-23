let num_tableros = 3;
let imagenes = [
    './img_loteria/alacran.png',
    './img_loteria/apache.png',
    './img_loteria/arana.png',
    './img_loteria/arbol.png',
    './img_loteria/arpa.png',
    './img_loteria/bandera.png',
    './img_loteria/bandolon.png',
    './img_loteria/barril.png',
    './img_loteria/borracho.png',
    './img_loteria/bota.png',
    './img_loteria/botella.png',
    './img_loteria/calavera.png',
    './img_loteria/camaron.png',
    './img_loteria/campana.png',
    './img_loteria/cantarito.png',
    './img_loteria/catrin.png',
    './img_loteria/cazo.png',
    './img_loteria/chalupa.png',
    './img_loteria/corazon.png',
    './img_loteria/corona.png',
    './img_loteria/cotorro.png',
    './img_loteria/dama.png',
    './img_loteria/diablo.png',
    './img_loteria/escalera.png',
    './img_loteria/estrella.png',
    './img_loteria/gallo.png',
    './img_loteria/garza.png',
    './img_loteria/gorrito.png',
    './img_loteria/jaras.png',
    './img_loteria/luna.png',
    './img_loteria/maceta.png',
    './img_loteria/mano.png',
    './img_loteria/melon.png',
    './img_loteria/muerte.png',
    './img_loteria/mundo.png',
    './img_loteria/musico.png',
    './img_loteria/negrito.png',
    './img_loteria/nopal.png',
    './img_loteria/pajaro.png',
    './img_loteria/palma.png',
    './img_loteria/paraguas.png',
    './img_loteria/pera.png',
    './img_loteria/pescado.png',
    './img_loteria/pino.png',
    './img_loteria/rana.png',
    './img_loteria/rosa.png',
    './img_loteria/sandia.png',
    './img_loteria/sirena.png',
    './img_loteria/sol.png',
    './img_loteria/soldado.png',
    './img_loteria/tambor.png',
    './img_loteria/valiente.png',
    './img_loteria/venado.png',
    './img_loteria/violoncello.png',
];

function obtenerImagenAleatoria(){
    return imagenes[Math.floor(Math.random()*imagenes.length)];
}
function crearTablero(){
    
    for(i=1; i <= num_tableros; i++){
        //declaro mi componente
        let tablero = document.createElement("div");
        //Atributos de mi boton
        tablero.id = "tablero"+i;
        document.getElementById("cTablero").appendChild(tablero);
        document.getElementById("tablero"+i).style = "float:left";
        document.getElementById("tablero"+i).style.width = "400px";
        document.getElementById("tablero"+i).style.marginLeft = "15px";
        document.getElementById("tablero"+i).style.marginBottom = "30px";
        document.getElementById("tablero"+i).style.backgroundColor = "rgb(6, 107, 173)";
        document.getElementById("tablero"+i).style.borderRadius = "10px";
        document.getElementById("tablero"+i).style.paddingLeft = "35px";
        document.getElementById("tablero"+i).style.paddingTop = "35px";
        document.getElementById("tablero"+i).style.paddingBottom = "35px";
        
        for(j=1; j <= 16; j++){
            let carta_Tab = document.createElement("div");
            let imagen = document.createElement("img");
            let num_carta = document.createElement("div");
            let name_carta = document.createElement("div");
            
            carta_Tab.id = "Tab_"+i+"Carta"+j;
            imagen.id = "Tab_"+i+"img"+j;
            num_carta.id = "Tab_"+i+"num"+j;
            name_carta.id = "Tab_"+i+"name"+j;

            document.getElementById("tablero"+i).appendChild(carta_Tab);
            document.getElementById("Tab_"+i+"Carta"+j).appendChild(num_carta); 
            document.getElementById("Tab_"+i+"Carta"+j).appendChild(imagen);
            document.getElementById("Tab_"+i+"Carta"+j).appendChild(name_carta);

            document.getElementById("Tab_"+i+"Carta"+j).style = "float:left";
            document.getElementById("Tab_"+i+"Carta"+j).style.margin = "2px";
            document.getElementById("Tab_"+i+"Carta"+j).style.height = "120px";
           // document.getElementById("Tab_"+i+"Carta"+j).style.paddingTop = "20px";
            document.getElementById("Tab_"+i+"Carta"+j).style.border = "solid 1px";
            
           // document.getElementById("Tab_"+i+"num"+j).style.height = "120px";
            document.getElementById("Tab_"+i+"num"+j).innerHTML= ""+j;
            document.getElementById("Tab_"+i+"num"+j).style.paddingLeft = "5px";
            document.getElementById("Tab_"+i+"num"+j).style.color = "aliceblue";

            document.getElementById("Tab_"+i+"img"+j).src = obtenerImagenAleatoria();
            document.getElementById("Tab_"+i+"img"+j).style.marginTop = "0px";
            document.getElementById("Tab_"+i+"img"+j).style.height = "70px";
            document.getElementById("Tab_"+i+"img"+j).style.width = "75px";

            document.getElementById("Tab_"+i+"name"+j).innerHTML= "Nombre";
            document.getElementById("Tab_"+i+"name"+j).className= "centrar";
            //document.getElementById("Tab_"+i+"name"+j).style.paddingLeft = "2px";
            document.getElementById("Tab_"+i+"name"+j).style.color = "aliceblue";
            
            
           // document.getElementById("Tab_"+i+"img"+j).style.margin = "2px";
           // document.getElementById("Tab_"+i+"img"+j).style.border = "solid 1px";
        
        }        
    } 
}

crearTablero();

//Declaro variables de botones
let multiplo_2 = document.getElementById("mu2");
let multiplo_3 = document.getElementById("mu3");
let multiplo_4 = document.getElementById("mu4");
let multiplo_5 = document.getElementById("mu5");
let multiplo_6 = document.getElementById("mu6");
let multiplo_7 = document.getElementById("mu7");
let multiplo_8 = document.getElementById("mu8");
let multiplo_9 = document.getElementById("mu9");
let num_primos = document.getElementById("numP");
let limpiar = document.getElementById("limpiar");


let num = prompt("Indica un número mayor o igual a 20:");

if(num >= 20){
   crearBtn();
}else{
    alert(":( Gracias por no seguir las instrucciones :(")
}

function crearBtn(){
    for(i=1; i <= num; i++){
        //declaro mi boton
        let boton = document.createElement("input");
        //Atributos de mi boton
        boton.id = "boton_"+i;
        boton.type = "button";
        boton.value = ""+i;
        boton.className = "celda2";
        //inserto mi boton al html
        
        document.getElementById("cboton").appendChild(boton);
        document.getElementById("boton_"+i).style.height = "35px";
        document.getElementById("boton_"+i).style.width = "35px";
        document.getElementById("boton_"+i).style.backgroundColor = "#058085";
        document.getElementById("boton_"+i).style.border = "0px";
        document.getElementById("boton_"+i).style.marginLeft = "2px";
        document.getElementById("boton_"+i).style.marginBottom = "2px";
    }
}

let numOcup = [];
let numP = [];
document.getElementById("boton_1").style.backgroundColor = "#1c0f94";

multiplo_2.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 2 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#ffffff";
            numOcup.push(i);
        }
    }
}
multiplo_3.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 3 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#d2a81c";
            numOcup.push(i);
        }
    }
}
multiplo_4.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 4 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#1c0f94";
            numOcup.push(i);
        }
    }
}
multiplo_5.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 5 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#1c0f94";
            numOcup.push(i);
        }
    }
}
multiplo_6.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 6 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#1c0f94";
            numOcup.push(i);
        }
    }
}
multiplo_7.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 7 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#1c0f94";
            
            numOcup.push(i);
        }
    }
}
multiplo_8.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 8 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#1c0f94";
            numOcup.push(i);
        }
    }
}
multiplo_9.onclick = function(){
    for(i=1; i <= num; i++){
        if(i % 9 == 0 && numOcup.includes(i) == false){
            document.getElementById("boton_"+i).style.backgroundColor = "#1c0f94";
            numOcup.push(i);
        }
    }
}
let contador = 0;
let numActual = 0;
let numd = 0;

num_primos.onclick = function(){ 
    for(i=2; i <= num; i++){
        numActual = i;    
        for(j = 1; j <= numActual; j++){
            if(i % j == 0){
                contador++;
            }
        }
        if(contador == 2){
            contador = 0;
            document.getElementById("boton_"+i).style.backgroundColor = "#000000";
        }else if(contador > 2){
            contador = 0;
        }
        
    }
}
limpiar.onclick = function(){
    for(i=1; i <= num; i++){
            document.getElementById("boton_"+i).style.backgroundColor = "#058085";
            numOcup.splice(0,num);
    }
    document.getElementById("boton_1").style.backgroundColor = "#1c0f94";
}


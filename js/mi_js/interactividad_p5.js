let num = prompt("Indica un número mayor o igual a 20:");

if(num >= 20){
   crearBtn();
}else{

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


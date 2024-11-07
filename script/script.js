/*Consegna:
-Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
-Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato).
BONUS:
Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
- E così via...
*/

//1. prendo elementi da html:
const lamp = document.getElementById("lamp");
const btn = document.getElementById("btn");

//2. salvo percorsi immagini lampadina accesa e spenta:
const lampOn = "../js-dom-1/img/yellow_lamp.png";
const lampOff = "../js-dom-1/img/white_lamp.png";
//3. variabile con stato iniziale lampadina(spenta, cioe false):
let statusLamp=false;

//4. creo funzione che accende e spegne lampadina:
function onOff(){
    if(statusLamp === false){
       lamp.src = lampOn;
        lamp.classList.add("lampAccesa");
        btn.textContent = "Spegni"; 
        btn.classList.remove("btnColorOff");
        btn.classList.add("btnColorOn")
    }
    else{
        lamp.src = lampOff;
        lamp.classList.remove("lampAccesa");
        btn.textContent = "Accendi";
        btn.classList.remove("btnColorOn");
        btn.classList.add("btnColorOff")
    }
    statusLamp = !statusLamp;
}

//5. creo evento che con click su btn esegue funzione onOff:
btn.addEventListener("click", onOff);


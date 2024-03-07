function encripText(){
    /*a = "ai";
    e = "enter";
    i = "imes";
    o = "ober";
    u = "ufat*/
    
    let texto = document.getElementById("initialText").value.toLowerCase();

    if(texto != ""){
        //document.querySelector('.copyArea').innerHTML = texto;
        var semAcento = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        document.getElementById("screenArea").removeAttribute("class");
        document.getElementById('screenImage').setAttribute("class", "screenImage");
        
        var encriptacao = semAcento.replace(/e/g, "enter").replace(/i/g, "imes")
        .replace(/o/g, "ober").replace(/a/g, "ai").replace(/u/g, "ufat");
        document.querySelector('.copyArea').innerHTML = encriptacao;
      
        document.getElementById("initialText").value = "";
    }
    else{
        alert("Digite o texto que deseja ser encriptado!")
    }
}
function decripText(){
    const mensage = document.getElementById('copyArea').textContent;

    if(mensage != ""){
        var decriptacao = mensage.replace(/enter/g,"e").replace(/imes/g,"i")
        .replace(/ober/g, "o").replace(/ufat/g,"u").replace(/ai/g,"a");
        document.querySelector('.copyArea').innerHTML = decriptacao;
    }
    else{
        alert("Não há texto Encriptado! Digite o texto para prosseguir")
    }
}
function copyText(){
    var copia = document.getElementById('copyArea').textContent;
    var recText = copia;

  
    recText = document.getElementById("initialText").value = recText;
    console.log(recText)

    document.getElementById("copyArea").textContent = "";


    
}
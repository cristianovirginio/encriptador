function encripText(){
    /*a = "ai";
    e = "enter";
    i = "imes";
    o = "ober";
    u = "ufat*/
    
    let texto = document.getElementById("initialText").value;

    if(texto != ""){
        //document.querySelector('.copyArea').innerHTML = texto;
        document.getElementById("screenArea").removeAttribute("class");
        document.getElementById('screenImage').setAttribute("class", "screenImage");
        
        var encriptacao = texto.replace(/e/g, "enter").replace(/i/g, "imes")
        .replace(/o/g, "ober").replace(/u/g, "ufat").replace(/a/g, "ai");
        document.querySelector('.copyArea').innerHTML = encriptacao;
        console.log(texto);
        document.getElementById("initialText").value = "";
    }
    else{
        alert("Digite em texto para ser encriptado!")
    }
}
function decripText(){
    const mensage = document.getElementById('copyArea').value;
    console.log(mensage);
    if(mensage != ""){
        var decriptacao = mansage.replace(/enter/g,"e").replace(/imes/g,"i")
        .replace(/ober/g, "o").replace(/ufat/g,"u").replace(/ai/g,"a");
        document.querySelector('.copyArea').innerHTML = decriptacao;
       
        
    }
    else{
        alert("Não há texto Encriptado! Digite o texto para prosseguir")
    }

}
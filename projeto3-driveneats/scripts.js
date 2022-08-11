function itemButton() {
    //SELECIONAR AO CLICAR NO ITEM
    let s = document.querySelector(".items");

    // if () {
    //     //DESMARCAR CO OUTRO SE JA ESTIVER SELECIONADO
    // }
}

function finishButton() {
    // OUTRA FRASE E BUTTON DESABILITADO
    //ONCLIK = FALSE
    let finishOFF = document.getElementById("finishOFF");
    let finishON = document.getElementById("finishON");
    finishOFF.hidden = false;
    finishON.hidden = true;

    if (cont == 3) {
        // HABILITAR BUTTON DE FECHAR PEDIDO SE PEDIDOS =3
        finishOFF.hidden = true;
        finishON.hidden = false;
        //document.getElementById(".finish").style.color = green;
    }
}


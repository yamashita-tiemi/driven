
function selectedItemButton(itemButton, categoryButton) {
    //SELECIONAR AO CLICAR NO ITEM
    const selectedItem = document.querySelector('.selected');
    const allItems = document.querySelectorAll('.selected');
    
    //SE OUTRO ITEM DA MESMA CATEGORIA ESTIVER SELECIONADO, DESMARCAR-LO
    if(selectedItem != null ) {
        for(let i=0; i<allItems.length; i++) {
            if(allItems[i].classList.contains(categoryButton)) {
                allItems[i].classList.remove('selected');
                allItems[i].classList.remove('selectedIcon');
                allItems[i].classList.remove(categoryButton);
            }
        }
    }
    itemButton.classList.add('selected');
    itemButton.classList.add('selectedIcon');
    itemButton.classList.add(categoryButton);

    //VERIFICA SE JA PODE FECHAR O PEDIDO
    enableButton('.finish');
}

function enableButton(classFinish) {
    //FRASE INICIAL E BUTTON DESABILITADO
    const finish = document.querySelector(classFinish);
    const allItems = document.querySelectorAll('.selected');
    // console.log(allItems); //"endereço"/caminho
    // console.log(allItems.length); //quantidade

    //SE O Nº PEDIDOS = 3, HABILITAR BUTTON DE FECHAR PEDIDO
    if(allItems.length == 3) {
        finish.classList.add('finishON');
        finish.innerHTML = "<h5>Fechar pedido</h5>";
    }
    else
        finish.classList.remove('finishON');
}

function message() {
    let str = "Olá, gostaria de fazer o pedido: \n";
    let strAux = ["- Prato: ", "- Bebida: ", "- Sobremesa: "];
    let aux1;
    let aux2;
    let price = [];
    let priceAux;
    let priceTotal = 0;
    const allItems = document.querySelectorAll('.selected');
    for(let i=0; i<allItems.length; i++) {
        aux1 = allItems[i].children;
        aux2 = aux1[1].children;
        str += strAux[i] + aux2[0].innerHTML + '\n';
        price[i] = aux2[2].innerHTML;
        priceAux = price[i].replace(/[^\d,]/g, '');
        // console.log(priceAux);
        priceAux = priceAux.replace(',', '.');
        // console.log(priceAux);
        priceTotal += parseFloat(priceAux);
    }
    str += `Total: R$ ${priceTotal.toFixed(2)}`;
    return str;
}

function finishButton() {
    const messageURL = encodeURIComponent(message());
    //concole.log(messageURL);
    window.open(`https://wa.me/5524992946925?text=${messageURL}`);
}

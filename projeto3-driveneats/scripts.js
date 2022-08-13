function selectedItemButton(itemButton) {
    //SELECIONAR AO CLICAR NO ITEM
    const selectedButton = document.querySelector('.selected');

    //DESMARCAR CO OUTRO SE JA ESTIVER SELECIONADO
    if (selectedButton != null || itemButton.classList.contains('.selected')) {
        itemButton.classList.remove('selected');
    } 
    itemButton.classList.add('selected');

    finishButton('.finish', '.selected');
}

function finishButton(test2, selectedItem) {
    // OUTRA FRASE E BUTTON DESABILITADO
    const finish = document.querySelector(test2);
    const allItems = document.querySelectorAll(selectedItem);
    // console.log(allItems); //"endereço"/caminho
    // console.log(allItems.length); //quantidade

    // const finishON = document.querySelector('finishON');

    // HABILITAR BUTTON DE FECHAR PEDIDO SE PEDIDOS =3
    if (allItems.length == 3) {
        finish.classList.add('finishON');
        finish.innerHTML = "<h5>Fechar pedido</h5>";
    }
}

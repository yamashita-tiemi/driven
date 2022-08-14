

function selectedItemButton(itemButton, categoryButton) {
    //SELECIONAR AO CLICAR NO ITEM
    const selectedItem = document.querySelector('.selected');
    const allItems = document.querySelectorAll('.selected');
    let i = 0;
    
    //SE OUTRO ITEM DA MESMA CATEGORIA ESTIVER SELECIONADO, DESMARCAR-LO
    if(selectedItem != null ) {
        for(i=0; i<allItems.length; i++) {
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
    finishButton('.finish','.selected');
}

function finishButton(classFinish, selectedItem) {
    //FRASE INICIAL E BUTTON DESABILITADO
    const finish = document.querySelector(classFinish);
    const allItems = document.querySelectorAll(selectedItem);
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

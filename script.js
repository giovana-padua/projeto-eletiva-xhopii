function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarPreco(botaoEscolhido){
    if(botaoEscolhido.id == "btnModeloPreto"){
        document.getElementById('precoProduto').innerHTML = "R$ 56,90";
        document.getElementById('qtdDisponivel').innerHTML = "171 peças disponíveis";
    }
    else if(botaoEscolhido.id == "btnModeloAzul"){
        document.getElementById('precoProduto').innerHTML = "R$ 56,90";
        document.getElementById('qtdDisponivel').innerHTML = "152 peças disponíveis";
    }
    else if(botaoEscolhido.id == "btnModeloVerde"){
        document.getElementById('precoProduto').innerHTML = "R$ 49,90";
        document.getElementById('qtdDisponivel').innerHTML = "213 peças disponíveis";
    }
    else if(botaoEscolhido.id == "btnModeloCinza"){
        document.getElementById('precoProduto').innerHTML = "R$ 69,90";
        document.getElementById('qtdDisponivel').innerHTML = "353 peças disponíveis";
    }
    else if(botaoEscolhido.id == "btnModeloRosa"){
        document.getElementById('precoProduto').innerHTML = "R$ 69,90";
        document.getElementById('qtdDisponivel').innerHTML = "319 peças disponíveis";
    }
    
}
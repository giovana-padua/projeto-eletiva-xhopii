function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarPreco(botaoEscolhido){
    const coresImagens = {
        "btnModeloPreto": "../img/produto1.png",
        "btnModeloAzul": "../img/produto2.png", 
        "btnModeloVerde": "../img/produto3.png",
        "btnModeloCinza": "../img/produto4.png",
        "btnModeloRosa": "../img/produto5.png"
    };
    
    document.getElementById("imgPrincipal").src = coresImagens[botaoEscolhido.id];

    if(botaoEscolhido.id == "btnModeloPreto"){
        document.getElementById('precoProduto').innerHTML = "R$ 56,90";
        document.getElementById('qtdDisponivel').innerHTML = "171 peças disponíveis";
        document.getElementById('btnModeloPreto').classList.add('selecionado');
        document.getElementById('btnModeloAzul').classList.remove('selecionado');
        document.getElementById('btnModeloVerde').classList.remove('selecionado');
        document.getElementById('btnModeloCinza').classList.remove('selecionado');
        document.getElementById('btnModeloRosa').classList.remove('selecionado');
    }
    else if(botaoEscolhido.id == "btnModeloAzul"){
        document.getElementById('precoProduto').innerHTML = "R$ 56,90";
        document.getElementById('qtdDisponivel').innerHTML = "152 peças disponíveis";
        document.getElementById('btnModeloAzul').classList.add('selecionado');
        document.getElementById('btnModeloVerde').classList.remove('selecionado');
        document.getElementById('btnModeloCinza').classList.remove('selecionado');
        document.getElementById('btnModeloRosa').classList.remove('selecionado');
        document.getElementById('btnModeloPreto').classList.remove('selecionado');
    }
    else if(botaoEscolhido.id == "btnModeloVerde"){
        document.getElementById('precoProduto').innerHTML = "R$ 49,90";
        document.getElementById('qtdDisponivel').innerHTML = "213 peças disponíveis";
        document.getElementById('btnModeloVerde').classList.add('selecionado');
        document.getElementById('btnModeloCinza').classList.remove('selecionado');
        document.getElementById('btnModeloRosa').classList.remove('selecionado');
        document.getElementById('btnModeloPreto').classList.remove('selecionado');
        document.getElementById('btnModeloAzul').classList.remove('selecionado');
    }
    else if(botaoEscolhido.id == "btnModeloCinza"){
        document.getElementById('precoProduto').innerHTML = "R$ 69,90";
        document.getElementById('qtdDisponivel').innerHTML = "353 peças disponíveis";
        document.getElementById('btnModeloCinza').classList.add('selecionado');
        document.getElementById('btnModeloRosa').classList.remove('selecionado');
        document.getElementById('btnModeloPreto').classList.remove('selecionado');
        document.getElementById('btnModeloAzul').classList.remove('selecionado');
        document.getElementById('btnModeloVerde').classList.remove('selecionado');
    }
    else if(botaoEscolhido.id == "btnModeloRosa"){
        document.getElementById('precoProduto').innerHTML = "R$ 69,90";
        document.getElementById('qtdDisponivel').innerHTML = "319 peças disponíveis";
        document.getElementById('btnModeloRosa').classList.add('selecionado');
        document.getElementById('btnModeloPreto').classList.remove('selecionado');
        document.getElementById('btnModeloAzul').classList.remove('selecionado');
        document.getElementById('btnModeloVerde').classList.remove('selecionado');
        document.getElementById('btnModeloCinza').classList.remove('selecionado');
    }      
}

function selecionarCor(imgEscolhida) {
    document.getElementById("imgPrincipal").src = imgEscolhida.src;
    
    const imagemParaDados = {
        "../img/produto1.png": {
            preco: "R$ 56,90",
            quantidade: "171 peças disponíveis"
        },
        "../img/produto2.png": {
            preco: "R$ 56,90", 
            quantidade: "152 peças disponíveis"
        },
        "../img/produto3.png": {
            preco: "R$ 49,90",
            quantidade: "213 peças disponíveis"
        },
        "../img/produto4.png": {
            preco: "R$ 69,90",
            quantidade: "353 peças disponíveis"
        },
        "../img/produto5.png": {
            preco: "R$ 69,90",
            quantidade: "319 peças disponíveis"
        }
    };
    
    const dados = imagemParaDados[imgEscolhida.src];
    if (dados) {
        document.getElementById('precoProduto').innerHTML = dados.preco;
        document.getElementById('qtdDisponivel').innerHTML = dados.quantidade;
    }
}

function mudarTamanho (botaoEscolhido){

    if (botaoEscolhido.id == "btnTamanhoP"){
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: P";
        document.getElementById('btnTamanhoP').classList.add('selecionado');
        document.getElementById('btnTamanhoM').classList.remove('selecionado');
        document.getElementById('btnTamanhoG').classList.remove('selecionado');
        document.getElementById('btnTamanhoGG').classList.remove('selecionado');
    }
    else if (botaoEscolhido.id == "btnTamanhoM"){
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: M";
        document.getElementById('btnTamanhoM').classList.add('selecionado');
        document.getElementById('btnTamanhoG').classList.remove('selecionado');
        document.getElementById('btnTamanhoGG').classList.remove('selecionado');
        document.getElementById('btnTamanhoP').classList.remove('selecionado');
    }
    else if (botaoEscolhido.id == "btnTamanhoG"){
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: G";
        document.getElementById('btnTamanhoG').classList.add('selecionado');
        document.getElementById('btnTamanhoGG').classList.remove('selecionado');
        document.getElementById('btnTamanhoM').classList.remove('selecionado');
        document.getElementById('btnTamanhoP').classList.remove('selecionado');
    }
    else if (botaoEscolhido.id == "btnTamanhoGG"){
        document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: GG";
        document.getElementById('btnTamanhoGG').classList.add('selecionado');
        document.getElementById('btnTamanhoG').classList.remove('selecionado');
        document.getElementById('btnTamanhoM').classList.remove('selecionado');
        document.getElementById('btnTamanhoP').classList.remove('selecionado');
    }

}

function usarCupom(button) {
            button.textContent = 'Resgatado';
            button.disabled = true;
            button.style.backgroundColor = 'rgb(210, 210, 210)';
            button.style.cursor = 'not-allowed';
        }
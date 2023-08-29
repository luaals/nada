function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const desc = document.querySelector("h4");
    
    if(valor=="gemeos" || valor=="gêmeos"){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo."
    }

    else if(valor=="escorpiao" || valor=="escorpião"){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/esco.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Kardia tem longos cabelos azuis marinhos e um olhar afiado azul, quando utiliza sua técnica Agulha escarlate sua unha do dedo indicador (tanto esquerda quanto direita) se torna um vermelho profundo, semelhante a ponta da cauda de um escorpião. Ele é um rapaz de porte físico forte, comum a quase todos os cavaleiros."
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/pei.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Albafica é um Cavaleiro de Ouro com a habilidade de utilizar rosas e seu próprio sangue, extremamente venenoso, como armas. Apesar de lutar primariamente com rosas envenenadas, Albafica, como Cavaleiro de Ouro, possui uma força física fora do comum."
    }
    else if(valor=="áries" || valor=="aries"){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Sábio cavaleiro de Ouro que protege a Casa de Áries. Também é o mestre de Kiki de Appendix O Cavaleiro de Áries, Mu, é o único entre os Cavaleiros de Ouro capaz de restaurar armaduras, tem uma personalidade pacífica, mas ao ver seus antigos companheiros (aparentemente), servindo a Hades, resolve lutar."
    }
    else if(valor=="touro"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/tou.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Aldebaran (アルデバラン, Aldebaran) é o Cavaleiro de Ouro da Constelação de Touro ( 牡牛座 タウラス , Taurus) durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte."
    }
    else if(valor=="câncer" || valor=="cancer"){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/can.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Máscara da Morte é um poderoso Cavaleiro de Ouro com a habilidade de remover a alma do seu oponente e enviá-la para a entrada do Mundo dos Mortos, lugar onde Máscara da Morte consegue entrar e sair facilmente. Sendo da patente de Ouro, Máscara da Morte é um dos Cavaleiros mais fortes do Exército de Atena."
    }
    else if(valor=="leao" ||  valor=="leão"){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Aiolia de Leão (獅子座のアイオリア, Reo no Aioria) é um Cavaleiro de Ouro do Século XX, irmão do cavaleiro de Sagitário da mesma época (Aioros), na série Os Cavaleiros do Zodíaco, de Masami Kurumada. É o Cavaleiro de Ouro que protege a Casa de Leão."
    }
    else if(valor=="virgem"){
        texto.innerHTML = " Virgem";
        imagem.setAttribute("src","img/vir.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Assim como Shaka, Asmita era considerado o homem mais próximo de Deus, isso por causa das suas incríveis habilidades, visto que conseguia retirar todos os sentidos dos oponentes, estando acima dos outros cavaleiros."
    }
    else if(valor=="libra"){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Dohko de Libra. O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades."
    }
    else if(valor=="sagitario" ||  valor=="sagitário"){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagi.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Sísifo é o atual Cavaleiro de Ouro de Sagitário do século XVIII, que é um dos principais defensores da deusa Athena. Sua introdução na obra foi bastante significativa, já que o homem é o responsável por ter trazido a menina Sasha (reencarnação da protetora da Terra) da Itália para o Santuário."
    }
    else if(valor=="capricornio" ||  valor=="capricórnio"){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "El Cid é mostrado como um pouco evasivo e muito sério, além de ser reservado e muito tranquilo, dá a impressão de ser hostil, mas a verdade é que ele é muito estimado como seus colegas e está sempre disposto a ajudar quando é solicitado para algo. Tem um caráter forte e parece não se incomodar com nada."
    }
    else if(valor=="aquario" ||  valor=="aquário"){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aqua.jpg");
        imagem.setAttribute("width","300px");
        desc.innerHTML= "Calmo e extremamente educado, Dégel é considerado a mente mais brilhante do Santuário, único além do Grande Mestre capaz de ler as estrelas, auxiliando-o, deste modo, na sua contemplação para entender o futuro."
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}
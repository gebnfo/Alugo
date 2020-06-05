function teste () {
    
    var divAnuncio = document.createElement("div")
    divAnuncio.className = "col-md rounded pb-3 ml-3 mr-3 pt-2 mt-3 mt-md-0"
    divAnuncio.style = "border:1px solid #ccc"

    var imagem = document.createElement("img")
    imagem.className = class="rounded w-75"
    imagem.src = "img/iphone11-meus-anuncios.jpg"
    imagem.style = "width: 640px; height: 480;"
    
    var divDescricao = document.createElement("div")
    divDescricao.className = "mt-3 mb-2"
    var descricao = document.createElement("span") 
    descricao.innerText = "teste"
    divDescricao.appendChild(descricao)

    var divPreco = document.createElement("div")
    divPreco.className = "mb-2"
    var preco = document.createElement("span")
    preco.style = "font-weight: bold;"
    preco.innerText = "teste"
    div.appendChild(preco)

    var divBotoes = document.createElement("div")
    var botaoAlterar = document.createElement("button")
    botaoAlterar.className = "btn btn-primary btn-block arredondar"

    var botaoIncluir = document.createElement("button")
    botaoIncluir.className = "btn btn-primary btn-block arredondar"
    divBotoes.appendChild(botaoAlterar)
    divBotoes.appendChild(botaoIncluir)

    divAnuncio.appendChild(imagem)
    divAnuncio.appendChild(divDescricao)
    divAnuncio.appendChild(divPreco)
    divAnuncio.appendChild(divBotoes)

    var anunciados = document.getElementById("publicados")
    anunciados.appendChild(divAnuncio) 
  }





<div id="teste" class="col-md rounded pb-3 ml-3 mr-3 pt-2 mt-3 mt-md-0" style="border:1px solid #ccc">
<img style="width: 640px; height: 480;" class="rounded w-75" src="img/iphone11-meus-anuncios.jpg"
  alt="iphone11">
<div class="mt-3 mb-2">
  <span>Iphone 11</span>
</div>
<div class="mb-2">
  <span><strong>R$ 350,99</strong></span>
</div>
<div>
  <button class="btn btn-primary btn-block arredondar">Alterar</button>
  <button class="btn btn-primary btn-block arredondar" onclick="">Excluir</button>
</div>
</div>
var objCarta1 = {
  nome: "Corujita",
  Imagem:
    "https://i.pinimg.com/originals/74/46/b3/7446b344f320e9bfab7cfb126b47bd49.jpg",
  atributos: {
    Ataque: 8,
    Defesa: 7,
    Magia: 4
  }
};

var objCarta2 = {
  nome: "Lagartixo",
  Imagem:
    "https://d2bsjm9patfdz0.cloudfront.net/images/0000297_lagartixo-pj-masks.jpeg",
  atributos: {
    Ataque: 9,
    Defesa: 4,
    Magia: 6
  }
};

var objCarta3 = {
  nome: "Menino Gato",
  Imagem:
    "https://www.pjmasks.com.br/wp-content/uploads/sites/7/2019/09/character-catboy.png",
  atributos: {
    Ataque: 9,
    Defesa: 4,
    Magia: 6
  }
};

var arrayCartas = [objCarta1, objCarta2, objCarta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  //escolha numero jogador:
  //parse int para nao vir os decimais junto no Random
  var cartaSorteadaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = arrayCartas[cartaSorteadaMaquina];

  //escolha numero jogador
  var cartaSorteadaJogador = parseInt(Math.random() * 3);

  //while para continuar sorteando ate achar um numero diferente (para não dar empate)
  while (cartaSorteadaJogador == cartaSorteadaMaquina) {
    var cartaSorteadaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = arrayCartas[cartaSorteadaJogador];
  console.log(cartaJogador);
  //depois de fazer o sorteio desabilita o botão "sortear carta" e habilita o btn "jogar"
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoesAtributos();
  mostrarImgJogador(cartaJogador.Imagem, cartaJogador.nome);
}

function exibirOpcoesAtributos() {
  var pegaLocalOpcoesHTML = document.getElementById("opcoes");
  var exibirOpcoesRadioHTML = "";

  for (var atributo in cartaJogador.atributos) {
    exibirOpcoesRadioHTML +=
      "<input type='radio' name='atributo' checked='true' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  pegaLocalOpcoesHTML.innerHTML = exibirOpcoesRadioHTML;
}

function obtemAtribSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      document.getElementById("btnJogar").disabled = false;
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atribSelecionado = obtemAtribSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atribSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atribSelecionado];
  //if para verificar quem ganha ou não
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML =
      "Uhuu, você venceu, parabéns!" +
      "<br>" +
      "O valor da carta da Máquina era " +
      valorCartaMaquina +
      "!" +
      "<br>" +
      "Seu oponente foi: ";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML =
      "Vish, você perdeu dessa vez, Sorry!" +
      "<br>" +
      "O valor da carta da Máquina era " +
      valorCartaMaquina +
      "!" +
      "<br>" +
      "Seu oponente foi: ";
  } else {
    elementoResultado.innerHTML =
      "Nossa, você e a máquina empataram!" +
      "<br>" +
      "Ambos estavam com o valor " +
      valorCartaMaquina +
      "!" +
      "<br>" +
      "Seu oponente foi: ";
  }

  document.getElementById("btnJogar").disabled = true;
  mostrarImgMaquina(cartaMaquina.Imagem, cartaMaquina.nome);
  //console.log(atribSelecionado);
  //console.log("valor carta maquina é: " + valorCartaMaquina);
}

function mostrarImgJogador(imagem, nome) {
  var resultadoCartaJogador = document.getElementById("resultadoCartaJogador");
  var imagemDaCartaJogador = "<img src=" + imagem + ">";

  var mostrarImagemNoHTML = document.getElementById("mostrarImagem");
  mostrarImagemNoHTML.innerHTML = imagemDaCartaJogador;
  resultadoCartaJogador.innerHTML = "<h2>" + nome + "</h2>";
}

function mostrarImgMaquina(imagem, nome) {
  var resultadoCartaMaquina = document.getElementById("resultadoCartaMaquina");

  console.log("entrou em mostrar img Maquina");
  var imagemDaCartaMaquina = "<img src=" + imagem + ">";

  var mostrarImgMaquinaHTML = document.getElementById("mostrarImagemMaquina");
  mostrarImgMaquinaHTML.innerHTML = imagemDaCartaMaquina;
  resultadoCartaMaquina.innerHTML = "<h2>" + nome + "</h2>";
}
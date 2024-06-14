var xMinBotao = 150;
var larguraBotao = 200;
var xMaxBotao = xMinBotao + larguraBotao;
var yMinBotao = 200;
var alturaBotao = 60;
var yMaxBotao = yMinBotao + alturaBotao;

var yMinBotao2 = 280;
var yMaxBotao2 = yMinBotao2 + alturaBotao;

var imagemEducador;
var imagemProgramadora;

var tela = 0;

function telaInstrucoes(){
  background(220);
  textSize(36);
  fill(10);
  text("Instruções", 150, 70);
  textSize(16);
  text("● O jogo apresentará imagens do mapa com uma espécie de circulo e perguntará qual o estado brasileiro representado;", 20, 120, 460);
  text("●Utilize o mouse para selecionar a resposta correta;", 20, 200, 460);
}

function telaCreditos(){
  background(220);
  textSize(40);
  text("Créditos", 170, 100);
  textSize(20);
  text("Jorge Santana", 260, 140);
  text("Maria Clara Freitas", 240, 300);
  textSize(18);
  text("Função: Educador", 250, 160);
  text("Função: Programadora", 230, 320);
  textSize(16);
  text("Licenciando em Geografia pelo Instituto Federal do Rio Grande do Norte", 180, 185, 300);
  text(" Bacharelanda em Ciências e Tecnologia na Universidade Federal do Rio Grande do Norte",180, 345, 300);
  image(imagemEducador,20,120);
  image(imagemProgramadora, 20, 300);
  
}

function preload() {
  imagemEducador = loadImage("jorge.png");
  imagemProgramadora = loadImage("mclara.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (tela == 0) {
    background(220);
    textSize(30);
    fill(10);
    text("Estados do Brasil", 70, 50);
    
    if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao && mouseY < yMaxBotao){
      fill(250);
      if (mouseIsPressed){
        tela = 1;
      }
    }
    else {
      noFill();
    }
    rect(xMinBotao, yMinBotao, larguraBotao, alturaBotao, 15);
    textSize(25);
    fill(0);
    text("Instruções", xMinBotao + 30, yMinBotao + 40);
    
    if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao2 && mouseY < yMaxBotao2){
      fill(250);
      if (mouseIsPressed){
        tela = 2;
      }
    }
    else {
      noFill();
    }
    rect(xMinBotao, yMinBotao2, larguraBotao, alturaBotao, 15);
    textSize(25);
    fill(0);
    text("Créditos", xMinBotao + 30, yMinBotao2 + 40);
    
    
  }
  
  if (tela == 1){
    telaInstrucoes();
  }
  
  if (tela == 2){
    telaCreditos();
  }

  
  
}
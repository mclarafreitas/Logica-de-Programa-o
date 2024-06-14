var nivel = 1;
var escolhaFase = 0;

var xMinBotao = 150;
var larguraBotao = 200;
var xMaxBotao = xMinBotao + larguraBotao;
var yMinBotao = 200;
var alturaBotao = 60;
var yMaxBotao = yMinBotao + alturaBotao;

var yMinBotao2 = 280;
var yMaxBotao2 = yMinBotao2 + alturaBotao;

var yMinBotao3 = 120;
var yMaxBotao3 = yMinBotao3 + alturaBotao;

var yMinBotao4 = 430;
var yMaxBotao4 = yMinBotao4 + alturaBotao;

var imagemEducador;
var imagemProgramadora;
var imagem1;
var imagem2;
var imagem3;
var imagem4;
var imagem5;

var tela = 0;

function acabouJogo() {
  background('rgb(0, 153, 153)');
  textSize(36);
  fill(10);
  text("Errou, Game Over!", 100, 50);
  
    //botão voltar
    if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4){
      fill(250);
      if (mouseIsPressed){
        tela = 0;
      }
    }
    else {
      noFill();
    }
    rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 15);
    textSize(25);
    fill(0);
    text("Voltar", xMinBotao + 70, yMinBotao4 + 40);
}

function mouseClicked(){
  if (tela == 3 && nivel == 1) {
    if (escolhaFase == 2){
      tela = 4;
    }
    if(escolhaFase == 1) {
      nivel = 2;
    }
  }
 else{ 
  if (tela == 3 && nivel == 2) {
    if (escolhaFase == 1){
      tela = 4;
    }
    if(escolhaFase == 2) {
      nivel = 3;
    }
  }  
 else{  
  if (tela == 3 && nivel == 3) {
    if (escolhaFase == 1){
      tela = 4;
    }
    if(escolhaFase == 2) {
      nivel = 4;
    }
  } 
 else{  
  if (tela == 3 && nivel == 4) {
    if (escolhaFase == 2){
      tela = 4;
    }
    if(escolhaFase == 1) {
      nivel = 5;
    }
  }
 else{  
  if (tela == 3 && nivel == 5) {
    if (escolhaFase == 2){
      tela = 4;
    }
    if(escolhaFase == 1) {
      nivel = 6;
    }
  } 
 }  
 }  
 }  
 }  
}

function opcaoBotao(xMin, xMax, yMin, yMax, largura, altura, opcao){
  if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax) {
    fill(250);
    escolhaFase = opcao;
    /*if (mouseIsPressed) {
      escolhaFase = opcao;
      console.log("Escolha: ", escolhaFase);
    }*/
  }
  else {
    noFill();
  }
  rect(xMin, yMin, largura, altura, 15);
  textSize(26);
  fill(0);
}

//Fase jogo

function fase1(){
  background('rgb(0, 153, 153)');
  textSize(28);
  fill(10);
  text("Qual o Estado Brasileiro?", 90, 60);
  image(imagem1, 50, 100);
  
  textSize(19);
  text("Rio Grande do Norte", 50, 320);
  opcaoBotao(50, 200, 290, 320, 180, 50,1);
  textSize(19);
  text("Paraíba", 100, 400);
  opcaoBotao(50, 200, 365, 400, 180, 50,2);
  
}

function fase2(){
  background('rgb(0, 153, 153)');
  textSize(28);
  fill(10);
  text("Qual o Estado Brasileiro?", 90, 60);
  image(imagem2, 50, 100);
  
  textSize(19);
  text("Acre", 120, 320);
  opcaoBotao(50, 200, 290, 320, 180, 50,1);
  textSize(19);
  text("Amazônia", 100, 400);
  opcaoBotao(50, 200, 365, 400, 180, 50,2);
  textSize(19);
}

function fase3(){
  background('rgb(0, 153, 153)');
  textSize(28);
  fill(10);
  text("Qual o Estado Brasileiro?", 90, 60);
  image(imagem3, 50, 100);
  
  textSize(19);
  text("Distrito Federal", 80, 320);
  opcaoBotao(50, 200, 290, 320, 180, 50,1);
  textSize(19);
  text("Goiânia", 100, 400);
  opcaoBotao(50, 200, 365, 400, 180, 50,2);
  textSize(19);
}

function fase4(){
  background('rgb(0, 153, 153)');
  textSize(28);
  fill(10);
  text("Qual o Estado Brasileiro?", 90, 60);
  image(imagem4, 50, 100);
  
  textSize(19);
  text("Rio de Janeiro", 80, 320);
  opcaoBotao(50, 200, 290, 320, 180, 50,1);
  textSize(19);
  text("São Paulo", 100, 400);
  opcaoBotao(50, 200, 365, 400, 180, 50,2);
  textSize(19);
}

function fase5(){
  background('rgb(0, 153, 153)');
  textSize(28);
  fill(10);
  text("Qual o Estado Brasileiro?", 90, 60);
  image(imagem5, 50, 100);
  
  textSize(19);
  text("Rio Grande do Sul", 60, 320);
  opcaoBotao(50, 200, 290, 320, 180, 50,1);
  textSize(19);
  text("Santa Catarina", 80, 400);
  opcaoBotao(50, 200, 365, 400, 180, 50,2);
  textSize(19);
}

function fase6(){
  background('rgb(0, 153, 153)');
  textSize(28);
  fill(10);
  text("Parabéns, você ganhou!!", 90, 60);
  
      //botão voltar
    if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4){
      fill(250);
      if (mouseIsPressed){
        tela = 0;
      }
    }
    else {
      noFill();
    }
    rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 15);
    textSize(25);
    fill(0);
    text("Voltar", xMinBotao + 70, yMinBotao4 + 40);

}
// Instruções Jogo

function telaInstrucoes(){
  background('rgb(0, 153, 153)');
  textSize(36);
  fill(10);
  text("Instruções", 150, 70);
  textSize(16);
  text("● O jogo apresentará o mapa do Brasil com um estado colorido e perguntará qual o estado brasileiro representado;", 20, 120, 460);
  text("●Utilize o mouse para selecionar a resposta correta;", 20, 200, 460);
  text("●Não se preocupe em errar, o jogo tem o objetivo de ser educativo.", 20, 250, 460);
  
    //botão voltar
    if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4){
      fill(250);
      if (mouseIsPressed){
        tela = 0;
      }
    }
    else {
      noFill();
    }
    rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 15);
    textSize(25);
    fill(0);
    text("Voltar", xMinBotao + 70, yMinBotao4 + 40);
}

// Créditos

function telaCreditos(){
  background('rgb(0, 153, 153)');
  textSize(40);
  text("Créditos", 170, 70);
  textSize(20);
  text("Jorge Santana", 260, 140);
  text("Maria Clara Freitas", 240, 315);
  textSize(18);
  text("Função: Educador", 250, 160);
  text("Função: Programadora", 230, 335);
  textSize(16);
  text("Licenciando em Geografia pelo Instituto Federal do Rio Grande do Norte", 180, 185, 300);
  text("Bacharelanda em Ciências e Tecnologia na Universidade Federal do Rio Grande do Norte",180, 345, 300);
  image(imagemEducador,20,120);
  image(imagemProgramadora, 20, 300);
  
  //botão voltar
    if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao4 && mouseY < yMaxBotao4){
      fill(250);
      if (mouseIsPressed){
        tela = 0;
      }
    }
    else {
      noFill();
    }
    rect(xMinBotao, yMinBotao4, larguraBotao, alturaBotao, 15);
    textSize(25);
    fill(0);
    text("Voltar", xMinBotao + 70, yMinBotao4 + 40);
}
  

function preload() {
  imagemEducador = loadImage("jorge.png");
  imagemProgramadora = loadImage("mclara.png");
  imagem1 = loadImage("rn.png");
  imagem2 = loadImage("am.png");
  imagem3 = loadImage("go.png");
  imagem4 = loadImage("rj.png");
  imagem5 = loadImage("rs.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (tela == 0) {
    background('rgb(0, 153, 153)');
    textSize(30);
    fill(10);
    text("Descubra o lugar", 140, 70);
    
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
    text("Instruções", xMinBotao + 43, yMinBotao + 40);
    
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
    text("Créditos", xMinBotao + 49, yMinBotao2 + 40);
    
      if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao3 && mouseY < yMaxBotao3){
        fill(250);
        if (mouseIsPressed){
          tela = 3;
        }
      }
      else {
        noFill();
    }
    rect(xMinBotao, yMinBotao3, larguraBotao, alturaBotao, 15);
    textSize(25);
    fill(0);
    text("Jogar", xMinBotao + 60, yMinBotao3 + 40);
    
    
  }
  
  if (tela == 1){
    telaInstrucoes();
  }
  
  if (tela == 2){
    telaCreditos();
  }
  
  if (tela == 3){
    if (nivel == 1) {
      fase1();
    }
    if (nivel == 2){
      fase2();
    }
    if (nivel == 3){
      fase3();
    }
    if (nivel == 4){
      fase4();
    }
    if (nivel == 5){
      fase5();
    }
    if (nivel == 6){
      fase6();
    }
  }
  if (tela == 4){
    acabouJogo();
  }
  
}

//usar enum
//gerar a opção do computador aleatoriamente
//usuario pode escolher o que deseja
import 'dart:io';
import 'dart:math';

enum OPCAO {
  pedra, papel, tesoura, sair
}
void exibir(String texto){
  print(texto);
}

int pegarOpcaoUsuario(){
  return int.parse(stdin.readLineSync()!);
}

bool opcaoEhValida(opcao){
  return (opcao >=1 && opcao <=4);
}

OPCAO mapearOpcao(int opcao){
  return OPCAO.values[opcao - 1];
}

String decidirResultado(OPCAO opcaoUser, OPCAO opcaoComp){
  const voceVenceu = "Você venceu!";
  if(opcaoUser == opcaoComp) return "Empate";
  if(opcaoUser == OPCAO.pedra && opcaoComp == OPCAO.tesoura) return voceVenceu;
  if(opcaoUser == OPCAO.papel && opcaoComp == OPCAO.pedra) return voceVenceu;
  if(opcaoUser == OPCAO.tesoura && opcaoComp == OPCAO.papel) return voceVenceu;
  return "Você perdeu!!!";
}

void jogo(){
  //enquanto usuário nao quiser sair
    //exibir menu
    int opUsuarioInt;
    OPCAO opUsuario, opComputador;
    do{
      do{
          exibir("Escolha uma opção: ");
          exibir("1-Pedra\n2-Papel\n3-Tesoura\n4-Sair");
          opUsuarioInt = (pegarOpcaoUsuario());
      }while(!opcaoEhValida(opUsuarioInt));
      opUsuario = mapearOpcao(opUsuarioInt);
      switch(opUsuario){
        case OPCAO.sair:
          exibir("Até!");
        default:
          opComputador= mapearOpcao(Random().nextInt(3) + 1);
          exibir('Você(${opUsuario.name}) VS (${opComputador.name})Computador');
          final resultado = decidirResultado(opUsuario, opComputador);
          exibir(resultado);
          sleep(Duration(seconds: 3));
      }
    }while(opUsuario != OPCAO.sair);
    }

    //capturar a opção do usuário, validadno

    //se o usuário escolher sair, sair


  //senão
    //sortear a escolha do computador

    //mapear a opcao do usuario de int para enum

    //mapear a opcao do computador de int para enum

    //


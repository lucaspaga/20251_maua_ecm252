//usar enum
//gerar a opção do computador aleatoriamente
//usuario pode escolher o que deseja
import 'dart:io';
import 'dart:math';

enum opcoesJogo {
  pedra, papel, tesoura, sair
}
void jogo(){
  //enquanto usuário nao quiser sair
    //exibir menu
    int opcao = 0;
    do{

      var gerador = Random();

      print('Escolha uma opção: ');
      print('1 - Pedra');
      print('2 - Papel');
      print('3 - Tesoura');
      print('4 - Sair');

      int opcaoMaquina = gerador.nextInt(5);
      var escolhaMaquina;
      switch(opcaoMaquina){
        case 1:
          escolhaMaquina = opcoesJogo.pedra.name;
        case 2:
          escolhaMaquina = opcoesJogo.papel.name;
        case 3:
          escolhaMaquina = opcoesJogo.tesoura.name;
        default:
          print("Opção invalida");
      }
      
      final opcaoTextual = stdin.readLineSync();
      if(opcaoTextual == null){
        print('Digite uma opção');
      }else{
        opcao = int.parse(opcaoTextual);
        var escolhaJogador;
        switch(opcao){
          case 1:
            escolhaJogador = opcoesJogo.pedra.name;
          case 2:
            escolhaJogador = opcoesJogo.papel.name;
          case 3:
            escolhaJogador = opcoesJogo.tesoura.name;
          default:
            print("Opção invalida");
      }}
      
      print(opcao);

    }while(opcao != 4);
    }

    //capturar a opção do usuário, validadno

    //se o usuário escolher sair, sair


  //senão
    //sortear a escolha do computador

    //mapear a opcao do usuario de int para enum

    //mapear a opcao do computador de int para enum

    //


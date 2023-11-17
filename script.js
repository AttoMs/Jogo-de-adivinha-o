var numeroSecreto = parseInt(Math.random() * 1001);

var iterador = 0;
var tentativas = 10;

var jogar = prompt('Quer jogar?(s/n)');
if (jogar == 's') {

    while (chute != numeroSecreto && iterador !== 10) {
        if (iterador != 0) {
            alert('Você já fez ' + iterador + ' tentativas!')
        }


        var chute = prompt('Digite um número entre 0 e 1000! Você tem ' + tentativas + ' tentativas. ');

        if (chute == numeroSecreto) {
            alert('Acertou! Levou ' + iterador + ' tentativas!');
        }
        else if (chute > numeroSecreto) {
            alert('Errou, o número secreto é menor');
        }
        else if (chute < numeroSecreto) {
            alert('Errou, o número secreto é maior');
        }
        iterador += 1;
        tentativas -= 1;

        if (iterador == 10) {
            alert('Você atingiu o número máximo de tentativas! O número correto era ' + numeroSecreto +'  !')
        }

    }
}
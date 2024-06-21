let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

document.getElementById('consoleButton').addEventListener('click', function() {
    console.log('O botão foi clicado');
});

document.getElementById('alertButton').addEventListener('click', function() {
    alert('Eu amo JS');
});

document.getElementById('promptButton').addEventListener('click', function() {
    var cidade = prompt('Digite o nome de uma cidade do Brasil:');
    if (cidade) {
        alert('Estive em ' + cidade + ' e lembrei de você.');
    }
});

document.getElementById('sumButton').addEventListener('click', function() {
    var number1 = parseInt(prompt('Digite o primeiro número inteiro:'));
    var number2 = parseInt(prompt('Digite o segundo número inteiro:'));
    
    if (!isNaN(number1) && !isNaN(number2)) {
        var sum = number1 + number2;
        alert('A soma dos dois números é: ' + sum);
    } else {
        alert('Por favor, digite apenas números inteiros.');
    }
});

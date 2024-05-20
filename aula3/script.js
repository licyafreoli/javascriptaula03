
let saldo = 1000;

// loop principal
while (true) {
    
    console.log("Menu:");
    console.log("1. Ver Saldo");
    console.log("2. Fazer Saque");
    console.log("3. Fazer Depósito");
    console.log("4. Sair");

   
    let escolha = prompt("Escolha uma opção:");

   
    escolha = parseInt(escolha);

    
    switch (escolha) {
        case 1:
            console.log("Saldo atual: $" + saldo);
            break;
        case 2:
            let saque = parseFloat(prompt("Digite o valor do saque:"));
            if (!isNaN(saque) && saque > 0 && saque <= saldo) {
                saldo -= saque;
                console.log("Saque de $" + saque + " realizado com sucesso.");
            } else {
                console.log("Valor de saque inválido.");
            }
            break;
        case 3:
            let deposito = parseFloat(prompt("Digite o valor do depósito:"));
            if (!isNaN(deposito) && deposito > 0) {
                saldo += deposito;
                console.log("Depósito de $" + deposito + " realizado com sucesso.");
            } else {
                console.log("Valor de depósito inválido.");
            }
            break;
        case 4:
            console.log("Obrigado por utilizar nosso caixa eletrônico. Tenha um bom dia!");
            
            process.exit(0);
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
}

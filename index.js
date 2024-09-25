// Importar o módulo 'readline' para leitura da entrada do usuário
const readline = require('readline');

// Criar uma interface de leitura da entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar o nome e a XP do herói
rl.question("Digite o nome do herói: ", (nome) => {
    rl.question("Digite a quantidade de experiência (XP) do herói: ", (xp) => {
        // Converter a XP para número inteiro
        xp = parseInt(xp);

        // Variável para armazenar o nível do herói
        let nivel = "";

        // Estruturas de decisão para determinar o nível com base na XP
        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            nivel = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            nivel = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            nivel = "Imortal";
        } else { // xp >= 10001
            nivel = "Radiante";
        }

        // Exibir a mensagem final com o nome e o nível do herói
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
        
        // Fechar a interface de leitura
        rl.close();
    });
});
function menu() {
    opcao = parseInt(prompt(
        "------ Menu Principal ------\n\n" +
        " 1 - Cadastro de Jogador \n" +
        " 2 - Cadastro de Treinador \n" +
        " 3 - Sair do Sistema"
    ));

    switch (opcao) {
        case 1:
            cadastrar_jogador();
            break;
        case 2:
            cadastrar_treinador();
            break;
        default:
            alert("Finalizando cadastro do Jogador...")
            document.getElementById("relatorio").innerHTML = "<p>Muito Obrigado!!"
    }
};


function cadastrar_jogador() {
    let a = "b";
    relatorio = "*- Informações do Jogador -* <br>"

    while (a.toUpperCase() != "S") {
        clube = prompt("Digite o nome do Clube")
        nome = prompt("Digite o Nome do Jogador")
        posicao = prompt("Digite a posição do Jogador")
        idade = (prompt("Digite a idade do Jogador"))

        relatorio = relatorio + "<br>+------------------------------+<br><br>" +
            "CLUBE : " + clube + "<br>" +
            "NOME : " + nome + "<br>" +
            "POSIÇÃO : " + posicao + "<br>" +
            "IDADE : " + idade + "<br>"
        "<br>+------------------------------------------+<br>"

        confirme = prompt("Finalizar Cadastro S - para sim ou N - para não")

        if (confirme.toUpperCase() == "S") {
            a = "S"
        };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "<p>";


    }
}

function cadastrar_treinador() {
    let t = "r";
    relatorio = "*- Informações do Jogador -* <br>"

    while (t.toUpperCase() != "S") {
        nome = prompt("Digite o Nome do Treinador")
        clube = prompt("Digite o nome do Clube")
        esquema = parseInt(prompt("Digite o esquema tatico"))

        relatorio = relatorio + "<br>+------------------------------+<br><br>" +
            "NOME : " + nome + "<br>" +
            "CLUBE : " + clube + "<br>" +
            "ESQUEMA : " + esquema + "<br>"
        "<br>+------------------------------------------+<br>"

        confirme = prompt("Finalizar Cadastro S - para sim ou N - para não")

        if (confirme.toUpperCase() == "S") {
            t = "S"
        };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "<p>";


    }
}
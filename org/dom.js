var contadorLinhas = 1; // --> (ID) contar linhas
var addButton = document.getElementById("addButton");
var editButton = document.getElementById("editButton");
var removeButton = document.getElementById("removeButton");
var tabela = document.getElementById("tabelaTimes");

// --> adicionar funções aos botões
addButton.addEventListener("click", adicionar_times);
editButton.addEventListener("click", editar_times);
removeButton.addEventListener("click", remover_times);

function adicionar_times() {
  // --> nova linha e valores
    var time1 = document.querySelectorAll(".Digitartextos")[0].value;
    var time2 = document.querySelectorAll(".Digitartextos")[1].value;
    var time3 = document.querySelectorAll(".Digitartextos")[2].value;

    var novaLinha = tabela.insertRow();
    novaLinha.setAttribute("id", "linha" + contadorLinhas);

    // --> inserir os valores da linha
    var celulaID = novaLinha.insertCell(0);
    celulaID.innerHTML = contadorLinhas;

    var celulaTime1 = novaLinha.insertCell(1);
    celulaTime1.innerHTML = time1;

    var celulaTime2 = novaLinha.insertCell(2);
    celulaTime2.innerHTML = time2;

    var celulaTime3 = novaLinha.insertCell(3);
    celulaTime3.innerHTML = time3;

    // --> incrementa o ID
    contadorLinhas++;

    document.querySelectorAll(".Digitartextos").forEach(input => {
        input.value = "";
    });
}

function editar_times() {
  // --> editar o ID informando a linha da tabela
    var idLinha = prompt("Digite o ID da linha que deseja editar:");
    var novaLinha = tabela.querySelector("#linha" + idLinha);
    if (novaLinha) {
        var novoTime1 = prompt("Novo time 1:");
        var novoTime2 = prompt("Novo time 2:");
        var novoTime3 = prompt("Novo time 3:");
        // --> inserir novos valores
        novaLinha.cells[1].innerHTML = novoTime1;
        novaLinha.cells[2].innerHTML = novoTime2;
        novaLinha.cells[3].innerHTML = novoTime3;
    } else {
        alert("ID de linha inválido!");
    }
}

function remover_times() {
  // --> remover a linha informando o ID
    var idLinha = prompt("Digite o ID da linha que deseja remover:");
    var linhaRemover = tabela.querySelector("#linha" + idLinha);
    if (linhaRemover) {
        linhaRemover.remove();
    } else {
        alert("ID de linha inválido!");
    }
}

function backHome() {
    window.location.href = "menu.html" 
}
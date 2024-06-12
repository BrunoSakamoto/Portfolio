function calcular() {
    var salario = parseFloat(document.getElementById('salario').value);
    var dependentes = parseInt(document.getElementById('dependentes').value);
    
    var inss = calcularINSS(salario);
    var irrf = calcularIRRF(salario, dependentes);
    
    var resultadoHTML = "<h2>Resultados</h2>";
    resultadoHTML += "<p>INSS: R$" + inss.toFixed(2) + "</p>";
    resultadoHTML += "<p>IRRF: R$" + irrf.toFixed(2) + "</p>";
    
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

function calcularINSS(salario) {
    if (salario <= 1100) {
        return salario * 0.075;
    } else if (salario <= 2203.48) {
        return salario * 0.09 - 16.5;
    } else if (salario <= 3305.22) {
        return salario * 0.12 - 82.6;
    } else if (salario <= 6433.57) {
        return salario * 0.14 - 148.71;
    } else {
        return 751.99;
    }
}

function calcularIRRF(salario, dependentes) {
    var baseCalculo = salario - (dependentes * 189.59);
    if (baseCalculo <= 1903.98) {
        return 0;
    } else if (baseCalculo <= 2826.65) {
        return baseCalculo * 0.075 - 142.8;
    } else if (baseCalculo <= 3751.05) {
        return baseCalculo * 0.15 - 354.8;
    } else if (baseCalculo <= 4664.68) {
        return baseCalculo * 0.225 - 636.13;
    } else {
        return baseCalculo * 0.275 - 869.36;
    }
}

function backHome() {
    window.location.href = "menu.html" 
}
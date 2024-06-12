const works = {
    "Automação Industrial": {
        title: "<h1>Automação Industrial</h1>",
        content: `
        <h4>Aqui irei mostrar alguns dos projetos realizados e o que eles fazem:</h4>
        <h3>Semáforo</h3>
        <p>Nesse projeto simulamos as luzes de um semáforo em um arduino utilizando LEDs.</p>
        <video width="100%" height="360" controls>
        <source src="video/VideoSemaforo.mp4" type="video/mp4"></video>
        <p>Os leds da esquerda (verde e vermelho) representam o semáforo para pedestres e o botão é utilizado para
        diminuir o tempo em que a luz verde para os carros ficará acesa, assim possibilitando a travessia dos
        pedestres.</p>
        <p>______________________________________________________________________________</p>
        <h3>Buzzer</h3>
        <p>Na automação industrial e projetos de eletrônica, o uso de sensores e atuadores é fundamental. 
        Um exemplo comum é o uso de um fotoresistor (sensor de luz) juntamente com um buzzer (atuador sonoro).
        <video width="100%" height="360" controls>
        <source src="video/VideoBuzzer.mp4" type="video/mp4"></video>
        <p>Neste projeto, integramos esses componentes para criar um sistema onde o buzzer toca quando o nível 
        de luz detectado pelo fotoresistor atinge um determinado valor.</p>
        <p>______________________________________________________________________________</p>
        <h3>Potenciômetro</h3>
        <p>O potenciômetro é um componente eletrônico que permite variar a resistência elétrica de forma controlada, 
        geralmente girando um botão ou um eixo. No contexto do Arduino, o potenciômetro é comumente utilizado para 
        controlar o brilho de um LED, a posição de um servo motor, o volume de um alto-falante, entre outras aplicações.</p>
        <video width="100%" height="360" controls>
        <source src="video/VideoPotenciometro.mp4" type="video/mp4"></video>
        <p>Neste projeto, um potenciômetro é usado como um dispositivo de entrada analógica. Ele fornece uma resistência 
        variável que pode ser ajustada manualmente pelo usuário. O Arduino lê a resistência medida pelo potenciômetro 
        através de uma de suas portas analógicas. Com base nessa leitura analógica, o Arduino calcula um valor proporcional 
        que representa a intensidade desejada para o LED.</p>
        <p>______________________________________________________________________________</p>
        <h3>Visor de Sete Segmentos</h3>
        <p>Um visor de sete segmentos é um componente eletrônico comum usado para exibir números, letras e alguns caracteres 
        especiais de forma simplificada. Esses segmentos são chamados de "a", "b", "c", "d", "e", "f" e "g" e, quando são 
        acesos de forma apropriada, podem formar diferentes dígitos.</p>
        <video width="100%" height="360" controls>
        <source src="video/VideoVisor7.mp4" type="video/mp4"></video>
        <p>Cada segmento de um visor de sete segmentos é ligado a um pino de controle. Quando um pino é ativado 
        (geralmente com nível lógico alto), o segmento correspondente se acende, formando um padrão que representa 
        um número ou uma letra.</p>
        <p>______________________________________________________________________________</p>
        <h3>Microcontrolador ESP 32</h3>
        <p>Neste projeto, utilizamos um display LCD de 32 segmentos. Ele consiste em duas linhas de 16 caracteres cada, 
        totalizando 32 caracteres disponíveis para exibição de texto, números e símbolos. Cada caractere é formado por 
        uma matriz de pontos ou segmentos que podem ser ativados individualmente para exibir informações.</p>
        <video width="100%" height="360" controls>
        <source src="video/VideoMenu.mp4" type="video/mp4"></video>
        <p>Utilizamos uma série de botões para realizar diferentes funções dentro do ESP 32. 
        <ul>
        <li>Botão verde: Confirmação.</li>
        <li>Botão azul: Trocar de opção (Avançando) / Confirmar.</li>
        <li>Botão amarelo: Trocar de Opção (Voltando) / Reiniciar o código.</li>
        <li>Botão vermelho: Sair / Cancelar a opção.</li>
        </ul></p>
        <p>Na opção de contar o clique, a cada clique do botão azul um número é somado ao contador do display. Se o botão amarelo for
        acionado, a contagem é reiniciada e se o botão vermelho for acionado, o programa volta ao menu.</p>
        <p>Na opção relógio, é iniciado um cronômetro, ao apertar o botão azul, cada segundo passa a valer 250ms, ao apertar amarelo, 
        o tempo volta ao normal e ao apertar o botão vermelho, o programa volta para o menu.</p>
        <p>Na opção de zerar os dados, se o usuário segurar o botão verde por 3 segundos, todos os dados serão zerados e se apertar o 
        vermelho, a operação será cancelada e o programa voltará para o menu.</p>
        
        <h3>Para mais projetos acesse aqui:</h3>
        <button class="btao" onclick="redirecionarAI('Automação Industrial')">GitHub</button>
        `
    },
    "Desenvolvimento WEB": {
        title: "<h1>Desenvolvimento WEB</h1>",
        content: `
        <h4>Aqui irei apresentar alguns projetos feitos utilizando o JavaScript e o que eles fazem.</h4>
        <h1>Menu</h1>
        <p>Nesse projeto utilizei o JavaScript para produzir um menu lateral que contém 3 projetos que realizei
        no decorrer do semestre, sendo eles: Calculadora(padrão), calculadora de INSS e IRRF e um gerador de JavaScript,
        utilizando diferentes funções para o funcionamento do menu e de cada programa.</p>
        <img src="img/menu.png" alt="caluladora" style="width:500px;">
        <h3>Código para o funcionamento do MENU</h3>
        <pre><code>document.getElementById('option1').addEventListener('click', function() {
  
        });
        
        document.getElementById('option2').addEventListener('click', function() {
          
        });
        
        document.getElementById('option3').addEventListener('click', function() {
          
        });
        
        function calculadora() {
            window.location.href = "calculadora.html"
        }
        
        function inss() {
            window.location.href = "inss.html"
        }
        
        function gerador() {
            window.location.href = "gerador.html"
        }
        
        function Home() {
            window.location.href = "index.html" 
        }
        </code></pre>
        <h3>O que cada função faz: </h3
    <ul> 
    <li>document.getElementById: Este método retorna uma referência ao elemento HTML que tem o atributo id especificado. </li>
    <li>addEventListener: Este método adiciona um ouvinte de evento ao elemento selecionado. Um ouvinte de evento é uma função que é chamada quando o evento especificado ocorre. </li>
    <li>window.location.href: Este método permite obter ou definir a URL da página atual. Esta propriedade é muito útil para redirecionar o usuário para uma nova página ou para obter a URL da página atual. .</li>
    </ul>  

    <h1>Calculadora</h1>
    <img src="img/calculadora.png" alt="caluladora" style="width:500px;">
        <h3>Código para funcionamento da Calculadora:</h3>
<pre><code>document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('display');
    const expressionElement = document.getElementById('expression');
    let expression = '';
        
function appendToDisplay(value) {
    display.value += value;
}
        
function appendOperator(operator) {
    expression += display.value + operator;
    expressionElement.innerText = expression;
    display.value = '';
}
        
function clearDisplay() {
    display.value = '';
    expression = '';
    expressionElement.innerText = '';
}
        
function backspace() {
    display.value = display.value.slice(0, -1);
}
        
function calculate() {
    expression += display.value;
    expressionElement.innerText = expression;
        
    try {
    const result = evalExpression(expression);
    display.value = result;
    } catch (error) {
    display.value = 'Erro';
    }
        
    expression = '';
}
        
function evalExpression(expr) {          
    expr = expr.replace(/÷/g, '/')
        .replace(/x/g, '*')
        .replace(/√/g, 'Math.sqrt')
        .replace(/\^/g, '**')
        .replace(/%/g, '/100*');
        
        return Function('"use strict"; return (' + expr + ')')();
}
        
    window.appendToDisplay = appendToDisplay;
    window.appendOperator = appendOperator;
    window.clearDisplay = clearDisplay;
    window.backspace = backspace;
    window.calculate = calculate;
});
        
    function backHome() {
    window.location.href = "index.html" 
}
        </code></pre>

    <h3>O que cada função faz: </h3
    <ul> 
    <li>appendToDisplay: Adiciona números ou caracteres ao display.</li>
    <li>appendOperator: Adiciona operadores à expressão e limpa o display.</li>
    <li>clearDisplay: Limpa o display e a expressão.</li>
    <li>backspace: Remove o último caractere do display.</li>
    <li>calculate: Calcula a expressão completa e exibe o resultado.</li>
    <li>evalExpression: Transforma a expressão em um formato computável e a avalia.</li>
    <li>backHome: Redireciona para a página inicial.</li>
    </ul>   
    
    <h1>Calculadora INSS e IRRF</h1>
    <img src="img/calcINSS.png" alt="caluladora" style="width:400px;">
    <h3>Código para funcionamento da calculadora:</h3>
    <pre><code>
function calcular() {
    var salario = parseFloat(document.getElementById('salario').value);
    var dependentes = parseInt(document.getElementById('dependentes').value);
        
    var inss = calcularINSS(salario);
    var irrf = calcularIRRF(salario, dependentes);
        
    var resultadoHTML = "Resultados";
    resultadoHTML += "INSS: R$" + inss.toFixed(2) + "";       
    resultadoHTML += "IRRF: R$" + irrf.toFixed(2) + "";
        
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
}</code></pre>
<h3>O que cada função faz: </h3>
<ul>
<li>calcular(): Função principal que coleta dados de entrada, chama funções de cálculo e exibe os resultados.</li>
<li>calcularINSS(salario): Calcula o valor do INSS com base no salário.</li>
<li>calcularIRRF(salario, dependentes): Calcula o valor do IRRF com base no salário e no número de dependentes.</li>
<li>backHome(): Redireciona o usuário para a página "menu.html".</li>
</ul>

<h1>Gerador de JavaScript</h1>
<h4>Esse projeto calcula o valor do INSS e o IRRF a partir do salário aplicado.</h4>
<img src="img/geradorJS.png" alt="gerador" style="width:500px;">
<h3>Código para funcionamento do gerador:</h3>
<img src="img/geradorcode.png" alt="gerador" style="width:500px;">
<h3>O que cada função faz: </h3>
<ul> 
<li>updateOutput: Atualiza a visualização de um código HTML, CSS e JavaScript fornecido pelo usuário em um iframe.</li>
<li>Eventos de entrada: Disparam a função updateOutput sempre que o conteúdo dos campos de entrada (HTML, CSS, JS) for alterado.</li>
<li>backHome: Redireciona o usuário para a página "menu.html".</li>
</ul> 
<h3>Aqui você terá acesso ao funcionamento desse projeto:</h3>
<button class="btao" onclick="menu()">Menu</button>
`

    },
    "Banco de Dados": {
        title: "<h1>Banco de Dados</h1>",
        content: `
        <h2>Sistema Educacional</h2>
        <h3>Diagrama Entidade Relacionamento</h3>
        <img src="img/DERSE.png" alt="DER" style="width:99%;" >
        <p>Nesse diagrama, foi projetado como funcionaria as relações de uma Universidade.</p>
        <h3>Banco de Dados Relacional</h3>
        <p>Aqui utilizamos:</p>
        <pre><code>SELECT * FROM alunos</code></pre> 
        <p>para encontrar todos os alunos que estão matriculados nessa universidade. Em que o "SELECT" se refere a uma coluna específica
        e o "FROM" a uma tabela específica.</p>
        <img src="img/alunoBD.png" alt="alunos" style="width: 99%;">
        <p>______________________________________________________________________________</p>
        <p>Aqui, utilizamos:
        <pre><code>SELECT nome_curso FROM cursos WHERE id_curso ='1'</code></pre>
        <p>para encontrar uma informação específica. Neste exemplo, utilizei o id do curso como método de filtro para aparecer somente
        o curso em específico do ID</p> 
        <img src="img/medic.png" alt="medic" style="width: 99%;">
        <p>______________________________________________________________________________</p>
        <p>Aqui, utilizamos:
        <pre><code>SELECT alunos.nome_aluno, matriculas.status FROM alunos 
FULL JOIN matriculas ON alunos.cpf = matriculas.cpf
WHERE matriculas.status = 'Formado'</code></pre>
        <p>para juntar duas tabelas e assim encontrar um informação específica. Nesse caso, usamos o status da matrícula para saber quais 
        alunos estavam formados.
        <img src="img/formados.png" alt="form" style="width: 99%;">


        `
    },
    "Linguagem de Programação": {
        title: "<h1>Linguagem de Programação</h1>",
        content: `
        <p>Aqui irei apresentar alguns projetos realizados utilizando a linguagem Java. </p>
        <h3>O que é a linguagem
        de programação?</h3>
        Uma linguagem de programação é um conjunto de instruções e regras que permite aos programadores 
        comunicar-se com computadores para criar programas de software.

        <h3>Projeto utilizando Variáveis, atribuições e operações matemáticas.</h3>
        <p>Nesse projeto, foi criado um programa que encontra a equação do segundo grau a partir de suas raizes.
        <p>Nessa lógica, foram criadas 5 variáveis: a, b, c, x1 e x2. Dentro das variáveis: a, b e c, são implementados os cálculos de
        uma equação do segundo grau de forma inversa, estabelecendo os calculos a partir de suas raizes.</p>
        <video width="100%" height="360" controls>
        <source src="video/VideoLista1.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h3>Projeto utilizando Estruturas de decisão</h3>
        <p>Nesse projeto, foi criado um programa que recebe três números inseridos pelo usuário e em seguida os 
        exibe em ordem crescente.
        <p>
        Foram criadas quatro variáveis: maior, meio, menor e aux. Foram utilizados três blocos de instruções, que precisam que suas
        condições sejam verdadeiras para serem executadas. 
        Nesse caso, as condições servem para verificar se quais variáveis são maiores e menores. Assim que forem verificados, os valores
        serão trocados garantindo que uma variável seja menor ou maior que outra e logo em seguida, imprimí-las em ordem crescente.
        <p>
        <video width="100%" height="360" controls>
        <source src="video/VideoLista2pt1.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h3>Projeto utilizando o Switch</h3>
        <p>Nesse projeto, foi criado um programa que simula uma máquina de café, em que o usuário insere a quantidadade
        de dinheiro, seleciona qual a opção desejada e em seguida recebe seu troco(se houver).
        <p>Nesse código foi utilizado uma estrutura de decisão utilizando o "Switch" e "Case". o Switch permite que sejam criados vários
        "caminhos", que possuem diferentes instruções dentro de cada um. Dentro do case é implementado um código, portanto, assim que um
        valor é selecionado, o código de dentro é executado.
        <video width="100%" height="360" controls>
        <source src="video/VideoLista2.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h3>Projeto utilizando estruturas de Repetição</h3>
        <p>Nesse projeto, foi criado um programa que gera a sequência de Fibonacci até o termo do número inserido pelo
        usuário. 
        <p>Nesse código, foi implementada uma estrutura de repetição, que irá executar um bloco de instruções enquanto a condição for 
        verdadeira.
        <video width="100%" height="360" controls>
        <source src="video/VideoLista3.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h3>Projeto utilizando Vetores</h3>
        <p>Nesse projeto, foi criado um programa que declara e calcula a determinante de uma matriz.
        <p>A matriz é um vetor bidimensional que armazena valores. Para percorrer os valores das diagonais, são usados índices específicos
        que percorrem os vetores internos da matriz.
        <p>O valor da determinante é encontrado ao fazer o produto das diagonais, utilizando os vetores e a manipulação de índices para 
        realizar os cálculos.
        <p>
        <video width="100%" height="360" controls>
        <source src="video/VideoLista4.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h3>Projeto utilizando funções e recursividade</h3>
        <p>Nesse projeto, foi criado um programa que recebe dois números do usuário e calcula a potência de um número pelo outro 
        (utilizando funções).
        <p>Nesse código, foi criada uma função chamada "calcularPotencia" com um bloco de instruções dentro. Então a função é chamada dentro 
        do método "Main", fazendo com que as instruções sejam "pescadas" da função para o método principal.
        <p>
        <video width="100%" height="360" controls>
        <source src="video/VideoLista5func.mp4" type="video/mp4"></video>
        <p>Nesse projeto, foi criado um programa que recebe dois números do usuário e calcula a potência de um número pelo outro (utilizando recursividade).
        <p>Nesse caso, a recursividade é utilizada para dividir o problema principal em subproblemas menores
        <video width="100%" height="360" controls>
        <source src="video/VideoLista5rec.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h2>Projeto utilizando Orientação Orientada a Objeto</h2>

       
        <button class="btao" onclick="redirecionarLP('Linguagem de Programação')">GitHub</button>

        `
    },
    "Ciência de Dados": {
        title: "<h2>Ciência de Dados</h2>",
        content: `
        <button class="botao" onclick="redirecionarCD('Ciência de Dados')">GoogleColab</button>
        `
    }
};
//Funções para redirecionar para um site ao clicar-----------------------------------------------------------------------
function redirecionar() {
    window.open("https://github.com/BrunoSakamoto", "_blank");
}

function redirecionarAI() {
    window.open("https://github.com/BrunoSakamoto/Listas/tree/main/ATV%20-%20Arduino", "_blank")
}

function redirecionarLP() {
    window.open("https://github.com/BrunoSakamoto/Listas/tree/main/Listas", "_blank")
}

function redirecionarCD() {
    window.open("https://colab.research.google.com/drive/1DSDHaqPH5K9PzjsscIMFAnFJc6dpIEHc#scrollTo=owo9SFXWEAFo", "_blank")
}
//-------------------------------------------------------------------------------------------------------------------------

//Funções para abrir os conteúdos
function showContent(section) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const { title, content } = works[section];
    modalBody.innerHTML = title + content;
    modal.style.display = "block";
}
//-------------------------------------------------------------------------------------------------------------------------

//Função para fechar conteúdos
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    closeModal();
}
//-------------------------------------------------------------------------------------------------------------------------

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//---------------------------------------------------------------------------------------------------------------------------

//Função para direcionar a tela para um outro html dentro do mesmo arquuivo--------------------------------------------------
function menu() {
    window.location.href = "menu.html"
}
//---------------------------------------------------------------------------------------------------------------------------
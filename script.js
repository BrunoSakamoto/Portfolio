const works = {
    //Conteúdo de Automação Industrial
    "Automação Industrial": {
        title: "<h1>Automação Industrial</h1>",
        content: `
        <h2>O que é a Automação Indsutrial?</h2>
        <p>A automação industrial é um conjunto de tecnologias que utiliza sistemas e dispositivos de controle, como software e 
        robótica, para permitir a operação automática de processos e máquinas industriais sem a necessidade de operadores humanos.</p>

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
    //Conteúdo de Desenvolvimento WEB
    "Desenvolvimento WEB": {
        title: "<h1>Desenvolvimento WEB</h1>",
        content: `
        <h2>O que é o Desenvolvimento WEB?</h2>
        <p>é uma área da tecnologia responsável pela criação, codificação e programação de sites, aplicativos e seus respectivos 
        elementos de linguagem.</p>
        
        <h4>Aqui irei apresentar alguns projetos feitos utilizando o JavaScript e o que eles fazem.</h4>
        <h1>Menu</h1>
        <p>Nesse projeto utilizei o JavaScript para produzir um menu lateral que contém 3 projetos que realizei
        no decorrer do semestre, sendo eles: Calculadora(padrão), calculadora de INSS e IRRF e um gerador de JavaScript,
        utilizando diferentes funções para o funcionamento do menu e de cada programa.</p>
        <img src="img/menu.png" alt="caluladora" style="width:600px;">
        <h3>Código para o funcionamento do MENU</h3>
        <pre><code>function calculadora() {
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
    <p>______________________________________________________________________________</p>
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
    <h3>Variáveis globais</h3>

    <ul> 
    <li>display: Referência ao elemento de exibição principal da calculadora onde os números e resultados são mostrados.</li>
    <li>expressionElement: Referência ao elemento que exibe a expressão matemática completa.</li>
    <li>expression: String que armazena a expressão matemática atual.</li>
    </ul>

    <h3>appendToDisplay(value)</h3>
    <ul>
    <li>value: O número ou símbolo a ser adicionado ao display.</li>
    </ul>

    <h3>appendOperator(operator)</h3>
    <ul>
    <li>operator: O operador matemático a ser adicionado (e.g., '+', '-', 'x').</li>
    </ul>

    <h3>clearDisplay()</h3>
    <ul>
    <li>Reseta os valores de display e expression para strings vazias.</li>
    </ul>

    <h3>backspace()</h3>
    <ul>
    <li>Remove o último caractere do display.</li>
    <li>Utiliza slice para truncar a string.</li>
    </ul>   

    <h3>calculate()</h3>
    <ul>
    <li>Concatena o valor atual do display à expressão.</li>
    <li>Atualiza a exibição da expressão completa.</li>
    <li>Avalia a expressão utilizando evalExpression.</li>
    <li>Se a avaliação for bem-sucedida, mostra o resultado no display. Caso contrário, exibe "Erro".</li>
    <li>Reseta a expressão após a avaliação.</li>
    </ul>

    <h3>evalExpression(expr)</h3>
    <ul>
    <li>Substitui símbolos específicos por operadores JavaScript equivalentes.</li>
    <li>÷ para /</li>
    <li>x para *</li>
    <li>√ para Math.sqrt</li>
    <li>^ para ** (exponenciação)</li>
    <li>% para /100* (para calcular porcentagens)</li>
    <li>Utiliza a função Function para avaliar a expressão em um contexto seguro.</li>
    <li>Retorna o resultado da avaliação.</li>
    </ul>

    <p>______________________________________________________________________________</p>
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

<h3>calcular()</h3> 
<ul>
<li>Obtém o valor do salário e o número de dependentes a partir dos elementos HTML.</li>
<li>Chama as funções calcularINSS e calcularIRRF para calcular o valor do INSS e do IRRF, respectivamente.</li>
<li>Formata os resultados em uma string HTML.</li>
<li>Atualiza o elemento HTML resultado com os resultados calculados.</li>
</ul>

<h3>calcularINSS(salario)</h3>
<ul>
<li>Calcula o valor do INSS com base no salário informado.</li>
<li>Aplica as alíquotas e faixas de contribuição de acordo com a legislação atual do INSS.</li>
<li>Retorna o valor do INSS calculado.</li></li>
</ul>

<h3>calcularIRRF(salario, dependentes)</h3>
<ul>
<li>Calcula o valor do IRRF com base no salário informado e no número de dependentes.</li>
<li>Deduz o valor da parcela a deduzir do imposto conforme a legislação do IRRF.</li>
<li>Retorna o valor do IRRF calculado.</li>
</ul>

<p>______________________________________________________________________________</p>
<h1>Projeto de árvore DOM(Document Object Model)</h1>
<p>Esse projeto cria uma tebela de acordo com os preenchimentos do usuário 
<img src="img/DOM.png" alt="gerador" style="width:500px;">
<h3>Código para o funcionamento do projeto</h3>
<pre><code>var contadorLinhas = 1; // --> (ID) contar linhas
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
}</code></pre>

<ul>
<li>Adicionar Linhas: A função adicionar_times coleta os valores de três campos de entrada (inputs) com a classe "Digitartextos", cria uma nova linha na tabela, insere os valores nas células da nova linha e incrementa o contador de linhas.</li>
<li>Editar Linhas: A função editar_times solicita o ID da linha a ser editada, solicita os novos valores para cada célula da linha e atualiza as células correspondentes.</li>
<li>Remover Linhas: A função remover_times solicita o ID da linha a ser removida e remove a linha da tabela.</li>
<li>Redirecionar: A função backHome redireciona o usuário para uma página chamada "menu.html".</li>
</ul>

<p>______________________________________________________________________________</p>
<h1>Gerador de JavaScript</h1>
<h4>Esse projeto calcula o valor do INSS e o IRRF a partir do salário aplicado.</h4>
<img src="img/geradorJS.png" alt="gerador" style="width:500px;">
<h3>Código para funcionamento do gerador:</h3>
<img src="img/geradorcode.png" alt="gerador" style="width:500px;">
<h3>O que cada função faz: </h3>
<h3>updateOutput()</h3>
<ul> 
<li>Esta função é chamada sempre que o conteúdo de uma das áreas de entrada (HTML, CSS ou JavaScript) é alterado.</li>
<li>Ela obtém o código HTML, CSS e JavaScript inserido pelo usuário nos campos de entrada.</li>
<li>Cria um elemento "iframe" para exibir a saída.</li>
<li>Escreve o conteúdo HTML completo dentro do "iframe", incluindo o código HTML, CSS e JavaScript inserido pelo usuário.</li>
<li>O JavaScript é incluído dentro da tag "script" no final do corpo do documento HTML.</li>
<li>A saída atualizada é exibida no elemento com o ID code-output.</li>
</ul>

<h3>Eventos de entrada</h3>
<ul>
<li>Disparam a função updateOutput sempre que o conteúdo dos campos de entrada (HTML, CSS, JS) for alterado.</li>
</ul> 
<p>______________________________________________________________________________</p>
<h3>Aqui você terá acesso ao funcionamento desse projeto:</h3>
<button class="btao" onclick="menu()">Menu</button>
`

    },
    //Conteúdo de Banco de Dados
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
        <p>______________________________________________________________________________</p>

        <h1>Banco de Dados NoSQL</h1>
        <p>É uma categoria de sistema de gerenciamento de banco de dados projetados para lidar com grandes volumes de
        dados distribuídos e oferecer flexibilidade no armazenamento de dados.
        <h3><span class="cor2">Vantangens</span> dos Bancos de Dados NoSQL</h3>
        <ul>
        <li>Desempenho e Escalabilidade: Capacidade de lidar com grandes volumes de dados e alta demanda de leitura/escrita, escalando horizontalmente.</li>
        <li>Flexibilidade: Suporte a dados semi-estruturados e não estruturados, permitindo mudanças rápidas no esquema dos dados.</li>
        <li>Alta Disponibilidade: Projetados para operar em ambientes distribuídos com replicação e tolerância a falhas.</li>
        <li>Desenvolvimento Ágil: Adequados para desenvolvimento ágil e rápido, onde os requisitos de dados podem evoluir rapidamente.</li>
        </ul>

        <h3><span class="cor1">Desvantagens</span> dos Bancos de Dados NoSQL</h3>
        <ul>
        <li>Consistência Eventual: Muitos bancos de dados NoSQL adotam o modelo de consistência eventual, o que pode ser uma desvantagem para aplicações que exigem consistência imediata.</li>
        <li>Complexidade: Gerenciamento de um sistema distribuído pode ser complexo e exigir conhecimento especializado.</li>
        <li>Falta de Padrões: Diversidade de modelos e falta de uma linguagem de consulta padrão como o SQL podem dificultar a integração e a curva de aprendizado.</li>
        </ul>

        <h3>Exemplos de Aplicações</h3>
        <img src="img/bdnosql.png" alt="gerador" style="width:700px;">
        <ul>
        <li>Redes Sociais: Para armazenar e consultar grandes volumes de dados de usuários e suas interações.</li>
        <li>E-commerce: Para gerenciar catálogos de produtos, carrinhos de compras e dados de usuários.</li>
        <li>IoT (Internet das Coisas): Para armazenar e processar dados gerados por dispositivos conectados.</li>
        <li>Análise de Dados: Para análise em tempo real de grandes volumes de dados.</li>
        </ul>
        <p>______________________________________________________________________________</p>
        <h3>Aqui você terá acesso ao projeto completo.</h3>
        <button class="btao" onclick="redirecionarBD('Banco de Dados')">Banco de Dados</button>
        
        `
    },
    //Conteúdo de Linguagem de Programação
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
        <p>
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
        <p>
        <video width="100%" height="360" controls>
        <source src="video/VideoLista2.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h3>Projeto utilizando estruturas de Repetição</h3>
        <p>Nesse projeto, foi criado um programa que gera a sequência de Fibonacci até o termo do número inserido pelo
        usuário. 
        <p>Nesse código, foi implementada uma estrutura de repetição, que irá executar um bloco de instruções enquanto a condição for 
        verdadeira.
        <p>
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
        <p>Nesse caso, a recursividade é utilizada para dividir o problema principal em subproblemas menores até que
        uma condição base seja atingida. Assim, as subsoluções são alinhadas para resolver o problema principal.
        <p>
        <video width="100%" height="360" controls>
        <source src="video/VideoLista5rec.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h2>Projeto utilizando Programação Orientada a Objeto</h2>
        <p>A Programação Orientada a Objetos é um paradigma que facilita a criação de software robusto, 
        reutilizável e fácil de manter. Em Java, a POO é aplicada através do uso de classes, objetos, herança, 
        interfaces e outros conceitos que permitem modelar problemas de forma eficaz e eficiente.
        <p>
        <p>Nesse programa, a classe "Personagem" define as propriedades e comportamentos de um personagem na batalha.
        <p>A classe Main contém o método principal que gerencia a batalha entre dois personagens.
        <ul> 
        <li>O código cria dois personagens com nomes, vida, ataque, e defesa.</li>
        <li>Simula uma batalha em turnos onde cada personagem ataca o outro até que a vida de um deles chegue a zero.</li>
        <li>Após cada rodada, o estado dos personagens é impresso.</li>
        <li>Quando a batalha termina, o vencedor é declarado.</li>
        </ul>
        <video width="100%" height="360" controls>
        <source src="video/videoPOO.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>

        <h3>Projeto Screensaver</h3>
        <p>Nesse projeto, tratamos:
        <ul>
        <li>Classes e Hierarquia de Herança: Existem várias classes que representam diferentes formas 
        geométricas (Rectangle, Circle, Square, Ellipse) que estendem a classe abstrata Shape. Isso forma uma 
        hierarquia onde Shape é a classe base e as outras são especializações dela.</li>

        <li>Encapsulamento: Cada classe (Shape, Rectangle, Circle, Square, Ellipse) encapsula seu estado e 
        comportamento através de métodos (getters, setters) e atributos privados.</li>

        <li>Polimorfismo: O método draw(Graphics g) na classe abstrata Shape é implementado de forma polimórfica 
        em cada subclasse para desenhar a forma específica na tela. Isso permite tratar objetos de diferentes 
        classes de forma uniforme.</li>

        <li>Construtores: Cada classe possui construtores que inicializam seus atributos, permitindo a criação de 
        objetos com diferentes configurações iniciais (como tamanho, posição, velocidade e cor).</li>

        <li>Interface Runnable: A classe Screensaver implementa a interface Runnable, demonstrando o uso de 
        interfaces para permitir que objetos possam ser executados em threads separadas (mecanismo de execução 
        paralela para animação). </li>

        <li>Eventos e Callbacks: Utilização de eventos do teclado (keyPressed e keyReleased) para controlar o 
        movimento ou interação do usuário com o protetor de tela.</li>

        <li>Swing e GUI: O projeto utiliza a biblioteca Swing para criar a interface gráfica. A classe Screensaver 
        estende javax.swing.JFrame e configura a interface do usuário através de métodos como initComponents() para 
        inicializar e configurar os componentes da tela.</li>

        <li>Gerenciamento de Gráficos: Uso de BufferStrategy para gerenciar o desenho off-screen, melhorando a 
        eficiência na renderização de gráficos na tela.</li>

        <li>Tratamento de Colisões: Implementação de lógica de colisão na classe Rectangle, onde as formas mudam 
        de direção quando atingem os limites da tela, demonstrando o uso de lógica orientada a eventos e 
        comportamento específico de subclasses.</li>
        </ul>
        <video width="100%" height="360" controls>
        <source src="video/poo.mp4" type="video/mp4"></video>
        <p>______________________________________________________________________________</p>
        <h3>Para acessar todos os projetos, navegue pelo botão abaixo.</h3>
        <button class="btao" onclick="redirecionarLP('Linguagem de Programação')">GitHub</button>

        `
    },
    //Conteúdo de Ciência de Dados
    "Ciência de Dados": {
        title: "<h2>Ciência de Dados</h2>",
        content: `
        <h3>Princípios de Ciência de Dados</h3>
        Os princípios de Ciência de Dados envolvem a coleta, processamento, análise e interpretação de grandes 
        volumes de dados para extrair informações úteis e tomar decisões informadas. Incluem a utilização de 
        técnicas estatísticas, aprendizado de máquina e algoritmos para identificar padrões e tendências.

        <h3>Amostragem</h3>
        A amostragem é o processo de selecionar uma parte representativa de uma população para análise. 
        Métodos comuns incluem amostragem aleatória simples, estratificada e sistemática. A amostragem é 
        essencial para inferir propriedades de toda a população a partir de um subconjunto de dados.

        Escalas de Medição
        As escalas de medição classificam dados em diferentes categorias com base em suas propriedades:
        <ul>
        <li>Nominal: Categorias sem ordem (ex.: tipos de frutas).</li>
        <li>Ordinal: Categorias com ordem (ex.: classificações de satisfação).</li>
        <li>Intervalar: Diferenças mensuráveis, mas sem zero absoluto (ex.: temperatura em Celsius).</li>
        <li>Racional: Possui zero absoluto (ex.: peso, altura).</li>
        </ul>

        <h3>Tendências Centrais</h3>
        As medidas de tendência central fornecem um valor central ou típico para um conjunto de dados:
        <ul>
        <li>Média: Soma dos valores dividida pelo número de valores.</li>
        <li>Mediana: Valor central quando os dados são ordenados.</li>
        <li>Moda: Valor que ocorre com maior frequência.</li>
        </ul>

        <h3>Medidas de Dispersão</h3>
        As medidas de dispersão descrevem a variabilidade ou dispersão dos dados:
        <ul>
        <li>Variância: Média dos quadrados das diferenças dos valores em relação à média.</li>
        <li>Desvio padrão: Raiz quadrada da variância, indicando a dispersão dos dados.</li>
        <li>Amplitude: Diferença entre o maior e o menor valor.</li>
        </ul>

        <h3>Teste de Hipóteses</h3>
        O teste de hipóteses envolve formular uma hipótese nula e uma hipótese alternativa, e usar dados amostrais 
        para decidir se há evidências suficientes para rejeitar a hipótese nula. Métodos incluem testes "t", testes 
        chi-quadrado, ANOVA, entre outros.

        <h3>Inferência</h3>
        A inferência estatística permite tirar conclusões sobre uma população com base em uma amostra. Inclui 
        estimativas pontuais, intervalos de confiança e testes de significância.

        <h3>Análise de Dados</h3>
        A análise de dados envolve explorar, limpar e transformar dados para obter insights. Métodos incluem 
        análise exploratória de dados (EDA), visualização de dados, modelagem preditiva e regressão.

        <h3>Funções</h3>
        Em matemática, uma função relaciona cada elemento de um conjunto a exatamente um elemento de outro 
        conjunto. Funções são fundamentais para modelar relações entre variáveis em ciência de dados.

        <h3>Limites</h3>
        O limite de uma função descreve o comportamento da função à medida que o argumento se aproxima de um 
        valor específico. Limites são essenciais para definir derivadas e integrais.

        <h3>Derivadas</h3>
        A derivada de uma função mede a taxa de variação da função em relação a uma variável. Derivadas são 
        utilizadas para encontrar máximos e mínimos de funções e para modelar a mudança contínua.

        <h3>Integrais</h3>
        A integral de uma função representa a área sob a curva da função. Integrais são usadas para calcular 
        áreas, volumes e para resolver problemas de acumulação.

        <h3>Raízes Racionais</h3>
        As raízes racionais de uma equação são os valores de x que satisfazem a equação polinomial f(x)=0. 
        Encontrar raízes racionais envolve determinar os fatores do termo constante e do coeficiente líder da 
        equação polinomial.

        <p>Esses conceitos são fundamentais para a análise de dados e a aplicação de técnicas de ciência de dados 
        em diversas áreas.
        <p>
        <p>______________________________________________________________________________</p>
        <h3>Para obter o acesso para todo conteúdo de banco de dados, clique no botão abaixo.</h3>
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

function redirecionarBD() {
    window.open("https://github.com/BrunoSakamoto/Banco-de-Dados", "_blank")
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

//Função para direcionar a tela para um outro html dentro do mesmo arquivo--------------------------------------------------
function menu() {
    window.location.href = "org/menu.html"
}
//---------------------------------------------------------------------------------------------------------------------------
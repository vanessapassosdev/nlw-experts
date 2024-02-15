const perguntas = [
    {
        pergunta: "Qual é a principal linguagem de programação usada no ambiente Delphi?",
        respostas:[
            "C++",
            "Java",
            "Object Pascal",
        ],
        correta: 2
    },
    {
        pergunta: "Qual componente Delphi é usado para criar uma interface gráfica de usuário?",
        respostas:[
            "TLabel",
            "TForm",
            "TButton",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a extensão de arquivo padrão para os projetos do Delphi?",
        respostas:[
            ".dfm",
            ".dpr",
            ".pas",
        ],
        correta: 1
    },
    {
        pergunta: "Qual palavra-chave é usada para iniciar um bloco de código em Delphi?",
        respostas:[
            "begin",
            "start",
            "beginning",
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador lógico é usado para verificar igualdade em Delphi?",
        respostas:[
            "==",
            "=",
            ":=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual componente Delphi é usado para armazenar e manipular dados de banco de dados relacionais?",
        respostas:[
            "TForm",
            "TLabel",
            "TDataSet",
        ],
        correta: 2
    },
    {
        pergunta: "Qual função Delphi é usada para converter uma string em um número inteiro?",
        respostas:[
            "ToInt",
            "StrToInt",
            "ConvertToInt",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do ambiente de desenvolvimento integrado (IDE) usado para programar em Delphi?",
        respostas:[
            "Delphi Studio",
            "Borland Developer Studio",
            "Pascal IDE",
        ],
        correta: 0
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em Delphi?",
        respostas:[
            "variable",
            "var",
            "declare",
        ],
        correta: 1
    },
    {
        pergunta: "Qual componente Delphi é usado para criar menus em um aplicativo?",
        respostas:[
            "TForm",
            "TMenu",
            "TButton",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length 

const mostrarTotal = document.querySelector('#acertos span')

mostrarTotal.TextContent = corretas.size + ' de ' + totalDePerguntas

//para cada item de pergunta fazer o laço
for (const item of perguntas){

    const quizItem = template.content.cloneNode(true) 
    quizItem.querySelector('h3').textContent = item.pergunta

        //laço para as respostas
        for (let resposta of item.respostas){
            const dt = quizItem.querySelector('dl dt').cloneNode(true);
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name','pergunta' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)

            //verificar ação da tela
            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta
                
                corretas.delete(item)
 
                if (estaCorreta) {
                    corretas.add(item)
                }
                
               mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

            } 

               

            quizItem.querySelector('dl').appendChild(dt)
        }
    
        quizItem.querySelector('dl dt').remove()
    
    
    //colocar a pergunta na tela
    quiz.appendChild(quizItem)
      
    }


//configura acesso na tela

function acessar()
{
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    //implementa estrutura q testa se os campos foram preenchidos

    if(!loginEmail || !loginSenha)
    {
        alert("Favor, preencha todos os campos!");
    }
    else
    {
        window.location.href = "login.html";
    }
}

var dadosLista = [];

function salvarUser()
{
    let nomeUser = document.getElementById('nomeUser').value;
     
    if(nomeUser)
    {
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        criaLista();
        document.getElementById ('nomeUser').value = "";
    }
    else
    {
        alert("Favor inserir um nome para cadastro");
    }
}

//funçao para preencher a lista de cadastro tabela

function criaLista()
{
    let tabela = "<tr><td>Nome</td><th>Ações</th></tr>";

    for(let i = 0; i <= (dadosLista.length -1); i++)
    {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-warning' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><td><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;       
    }
}

//funcao para exluir nome da lista 

function excluir(i)
{
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}

function editar(i)
{
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);   
}
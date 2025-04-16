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
        document.getElementById ('nomeUser').value = "";
    }
}

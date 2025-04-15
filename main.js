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
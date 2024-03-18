var botao = document.getElementById("botao");
botao.addEventListener("click",alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var numero = document.getElementById("telefone");

var numero = document.getElementById("CEP");

var numero = document.getElementById("logradouro");

var numero = document.getElementById("CPF");


function alertar(){
   // alert(nome.value + " " + "clicou no botão!!!");
saida.innerText = "Nome: " + "  " + nome.value +
                "\n E-mail: " + " " + email.value;

}
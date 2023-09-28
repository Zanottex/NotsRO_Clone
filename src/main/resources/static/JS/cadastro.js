$("#enviar").click(cadastrar);
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

function cadastrar(){
 let nome = $("#nome").val();
 let matricula = $("#matricula").val();
 let email = $("#email").val();
 let cargo = $("#cargo")[0].value;

    $.ajax({
    type: "POST",
    url: "/cadastro",
    data:{
        nome:nome,
        cargo:cargo,
        matricula:matricula,
        email:email,
    },
    success:function(){
        alert("ok");
    },
    error:function(){
        alert("Não ok");
    },
})
}
function visualizar1(){
     inputConfirmSenha.setAttribute('type', 'text')
 }
function visualizar2(){
     inputSenha.setAttribute('type', 'text')
}







$("#login").click(enviarlogin);

function enviarlogin(){
    let matricula = $("#matricula").val();
    let senha = $("#senha").val();

    $.ajax({
    type: "POST",
    url: "/login",
    data:{
        matricula:matricula,
        senha:senha,
    },
    success: function(data){
    if(data){
    window.location.href="/home";
    }else{
    alert("Porcaria")
    }
    },
    error: function(data){
        alert("Falha ao tentar realizar o login!")
    }
    })
}
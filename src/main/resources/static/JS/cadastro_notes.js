$("#enviar").click(cadastrarNot);
$("#voltar").click(voltar);
function voltar(){
    window.location.href="/home";
}
function cadastrarNot(){
    let numero = $("#numero").val();
    let patrimonio = $("#patrimonio").val();

    $.ajax({
        type: "POST",
        url: "/Notes",
        data:{
            numero:numero,
            patrimonio:patrimonio,
        },
        success:function(){
           alert("ok");
        },
        error:function(){
           alert("Não ok");
        },
})
}


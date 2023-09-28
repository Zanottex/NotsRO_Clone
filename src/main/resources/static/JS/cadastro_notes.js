$("#enviar").click(cadastrarNot);

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




function enviarCadastroSoftware(){
    let Nome = $("#Nome").val();
    let pago = $("#pago")[0].checked;

    $.ajax({
        type: "POST",
        url:"/Software/Cadastro",
        data:{
            Nome: Nome,
            pago: pago,
        },
        success: function(data){
            alert("BOM");
        },
        error: function(){
            alert("Deu ruim");
        }
    });
}
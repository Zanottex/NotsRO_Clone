$("#enviar").click(enviarCadastroSoftware);

function enviarCadastroSoftware(){
    let nome = $("#nome").val();
    let exigeLicenca = $("#exigelicenca")[0].checked;

    $.ajax({
        type: "POST",
        url:"/Software/Cadastro",
        data:{
            nome: nome,
            exigelicenca: exigeLicenca
        },
        success: function(data){
            alert("BOM");
        },
        error: function(){
            alert("Deu ruim");
        }
    });
}
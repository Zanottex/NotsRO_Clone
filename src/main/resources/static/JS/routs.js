function controleRotasGet(url){
    switch(url){
        case "/logout":
            gerarSwal(url);
            break;
        case "/Notes":
            $.get(url,function(data){
                $(".container").html(data);
                $("#enviar").click(cadastrarNot);
            });
        break;
        case "/cadastro":
            $.get(url,function(data){
                $(".container").html(data);
                $("#enviar").click(cadastrar);
            });
        break;
        case "/Software/Cadastro":
             $.get(url,function(data){
                $(".container").html(data);
                $("#enviar").click(enviarCadastroSoftware);
             });
        break;
        case "/Hominha":
             $.get(url,function(data){
             $(".container").html(data);
             });
        break;
        case "/edit/usuario":
             $.get(url,function(data){
             $(".container").html(data);
             $("#salvar").click(salvarPerfil);
             });
        break;

    }
}
//Mapeamento dos botões
$('a').click(function(event){
    event.preventDefault();
    controleRotasGet($(this).attr("href"));
});

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
    }
}

$("#logout").click(gerarSwal);

function gerarSwal(urlSucesso){
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success me-2',
    cancelButton: 'btn btn-danger ms-2'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Salve meu parça!',
  text: "Tu quer sair?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Vlw flw',
  cancelButtonText: 'Mb miss click!',
  reverseButtons: false
}).then((result) => {
  if (result.isConfirmed) {
    window.location.href=urlSucesso
  } else if (result.dismiss === Swal.DismissReason.cancel) {

  }
})
}
//Mapeamento dos botões
$('a').click(function(event){
    event.preventDefault();
    if(!$(this).hasClass('btn')){
    $('a').removeClass('active disabled text-Blue');
    $(this).addClass('active disabled text-Blue');
    }
    controleRotasGet($(this).attr("href"));
});
$('.navbar-brand').off('click');




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
function mensagemSucesso(mensagem){
Swal.fire({
   position: 'top-end',
   icon: 'success',
   title: 'Your work has been saved',
   showConfirmButton: false,
   timer: 1500
 })
 }
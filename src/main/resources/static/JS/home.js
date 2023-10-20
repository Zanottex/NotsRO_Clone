//Mapeamento dos botões
$('a').click(function(event){
    event.preventDefault();
    if(!$(this).hasClass('btn')){
    $('a').removeClass('active disabled text-White');
    $(this).addClass('active disabled text-White');
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
function reserva(){
    let dataReserva = $("#dataReserva").val()+' 00:00:00 -0300';
    let quantidade = $("#quantidade").val();

    if(dataReserva && quantidade){
    $("#data-table").prepend('<tr>'+
                                '<td>'+new Date(dataReserva).toLocaleDateString()+'</td>'+
                                '<td>'+quantidade+'</td>'+
                                '<td>'+new Date().toLocaleDateString()+'</td>'+
                                '</tr>');
        $("#dataReserva").val('');
        $("#quantidade").val('');
        $('#exampleModal').modal('hide');
        }else{
        alert("Por favor, preencha todos os campos");
        }
}
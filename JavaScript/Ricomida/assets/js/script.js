$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  
  $(function () {
    $("#enviarCorreo").click(function () {
      alert("El correo fue enviado correctamente...")
    });
  });

  $(function () {
    $(".ing-prep").on('dblclick', function () {
      $(this).css('color', 'red');
    });
  });
  
  $(function () {
    $(".tarjeta").click(function () {
      $(".texts").toggle(300);
    });
  });
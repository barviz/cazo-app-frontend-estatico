
$(document).ready(function () {
    $("#btnmodal").click(function () {
        var nombreSocio = $(this).data('nombre');
        var apellidoSocio = $(this).data('apellido');
        var telefonoSocio = $(this).data('telefono');
        var emailSocio = $(this).data('email');

        $("#nombre").val(nombreSocio);
        $("#apellido").val(apellidoSocio);
        $("#telefono").val(telefonoSocio);
        $("#email").val(emailSocio);

    });
});


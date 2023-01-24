$(document).ready(function () {
    $("#btnmodal").click(function () {
        var telefono = $(this).data('telefono');
        var email = $(this).data('email');
        var imagen =$(this).data('imagen');

        $("#telefono").val(telefono);
        $("#email").val(email);
        $("#imagen").val(imagen);
    });
});

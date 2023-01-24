$(document).ready(function () {
    $("#btnmodal").click(function () {
        var nombreActividad = $(this).data('nombre');
        var descripcionActividad = $(this).data('descripcion');
        var imagenActividad = $(this).data('imagen');

        $("#nombre").val(nombreActividad);
        $("#descripcion").val(descripcionActividad);
        $("#imagen").val(imagenActividad);

    });
});


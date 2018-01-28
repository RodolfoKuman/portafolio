$(function () {
    $('.galeria .contenedor-imagen').on('click', function () {
        $('#modal').modal;
        var ruta_imagen = ($(this).find('img').attr('src'));
        var url = ($(this).find('span').text());
        $('#imagen-modal').attr('src', ruta_imagen);
        $('#url-page').attr('href', url);
        console.log(url);
        console.log(ruta_imagen);
    });

    $('#modal').on('click', function () {
        $('#modal').modal('hide');
    });
})

$(document).on("ready",function(){

	$("#contact-form").on("submit",function(ev){
		ev.preventDefault();
		var $form = $("#contacto");
		$.ajax({
			url: "https://formspree.io/rodolfo.kuman@hotmail.com",
			method: "POST",
			data: $form.formObject(),
			dataType:"json",
			success:function(){
				$("#noti").addClass("text-success");
				$("#noti").html("Tu mensaje ha sido enviado con éxito, en breve me pondre en contácto contigo");
        $("#btn-sendForm").attr("disabled",true);
			},
			error: function(){
				$("#noti").addClass("text-danger");
				$("#noti").html("Tu mensaje no se pudo enviar, intente nuevamente");
				setInterval('location.reload()',5000);
			},
		})
	});

});

$(document).ready(function(){

    $("#alert-login").hide();

    $("#btn-entrar").click(function(){
        const url = "http://localhost:3000/login";
        const form = {
            email: $("#email").val(),
            senha: $("#senha").val()
        };

        $.post(url, form, function(retorno){
            if(retorno.status == "erro")
            {
                $("#alert-login").show();
            }
            else
            {
                sessionStorage.setItem("usuario", "logado")
                location.href = "index.html";
            }
        });
    });
});
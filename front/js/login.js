$(document).ready(function(){

    $("#alert-login").hide();

    $("#btn-entrar").click(function(){
        const url = "http://localhost:3000/login";
        const form = {
            email: $("#email").val(),
            senha: $("#senha").val()
        };

        $.post(url, form, function(retorno)
        {
            console.log(retorno);

            if(retorno.status == "ok")
            {
                sessionStorage.setItem("usuario", "logado")
                location.href = "index.html";
            }
            else
            {
                $("#alert-login").show();
            }
        });
    });
});
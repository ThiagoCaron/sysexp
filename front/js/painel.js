$(document).ready(function(){

    // trava se o usuário não estiver logado
    let usuario = sessionStorage.getItem("usuario");

    if(usuario == null)
    {
        location.href = "login.html";
    }

    // atualizando a data e hora
    function exibeData()
    {
        var dia = new Date();
        var mes = dia.getMonth() + 1;

        var dataFormatada = dia.getDate() + "/" + mes + "/" + dia.getFullYear() + " " + dia.getHours() + ":" + dia.getMinutes() + ":" + dia.getSeconds();
        // equivalente ao innerHTML
        $("#data-hora").html(dataFormatada);
    }

    setInterval(exibeData, 500);

    // botão logout
    $("#btn-logout").click(function(){
        sessionStorage.clear();
        location.href = "login.html"
    });;// fim do botão logout
});

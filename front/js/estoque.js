$(document).ready(function(){
    $("#btn-carregar")
    var url = "http://localhost:3000/estoque";

    $("#listagem").empty();

    $.getJSON(url, function(dados){
        // para cada item do vetor
        dados.forEach(function(item, index){
            var linha = "<tr>";
            linha +="<td>"+index +"</td>";
            linha +="<td>"+item.nota +"</td>";
            linha +="<td>"+item.produto +"</td>";
            linha +="<td>"+item.quantidade +"</td>";
            linha +="<td>"+item.destino +"</td>";

            linha += "<td>";  
            linha += "<a href='http://localhost:3000/estoque-del/"+ item._id +"' class='btn btn-danger btn-sm'>X</a>";
            linha += "<button codigo='"+ item._id +"' class='btn-editar btn btn-primary btn-sm'>E</button>";
            linha += "</td>";

            linha +="</tr>";

            // adiciona linha na tabela
            $("#listagem").append(linha);
        });// fim do forEach
            // abrir modal
        $(".btn-editar").click(function(){

            const id = $(this).attr("codigo");

            // carregando o modal
            const modalEditar = new bootstrap.Modal('#modal-editar');
            modalEditar.show();

            $.getJSON(url + "/" + id, function(dados){
                console.log(dados);
                $("#nota").val(dados.nota)
                $("#produto").val(dados.produto)
                $("#quantidade").val(dados.quantidade)
                $("#destino").val(dados.destino)
                $("#codigo").val(dados._id);
            });// fim do getJSON btn
        });// fim btn-carregar
    });// fim do getJSON url

    // salvar produto
    $("#btn-salvar").click(function(){
        $("#form-editar").submit();
    });// fim do btn salvar produto

});
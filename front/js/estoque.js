$(document).ready(function(){
    $("#btn-carregar")
    var url = "http://localhost:3000/estoque";

    $("#listagem").empty();

    $.getJSON(url, function(dados){
        dados.forEach(function(item, index){
            var linha = "<tr>";
            linha +="<td>"+index +"</td>";
            linha +="<td>"+item.nota +"</td>";
            linha +="<td>"+item.produto +"</td>";
            linha +="<td>"+item.quantidade +"</td>";
            linha +="<td>"+item.destino +"</td>";

            linha +="</tr>";

            $("#listagem").append(linha);
        });
    });
});
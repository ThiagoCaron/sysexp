$(document).ready(function(){
    $("#btn-cadastrar-cliente")
        //console.log("clicou");
    
        var url = "http://localhost:3000/clientes"

        $("#listagemClientes").empty();

        $.getJSON(url, function(dados){
            //console.log(dados);

            dados.forEach(function(item, index){
                let linha = "<tr>";

                linha += "<td>"+index+ "</td>";
                linha += "<td>"+item.nomeCompleto+ "</td>";
                linha += "<td>"+item.cpf+ "</td>";

                linha += "<td>";  
                linha += "<a href='http://localhost:3000/clientes-del/"+ item._id +"' class='btn btn-danger btn-sm'>X</a>";
                linha += "<button codigo='"+ item._id +"' class='btn-editar-clientes btn btn-primary btn-sm'>E</button>";
                linha += "</td>";

                linha += "</tr>";

                $("#listagemClientes").append(linha);
            });

            $(".btn-editar-clientes").click(function(){

                const id = $(this).attr("codigo");
    
                // carregando o modal
                const modalEditar = new bootstrap.Modal('#modal-editar-clientes');
                modalEditar.show();
    
                $.getJSON(url + "/" + id, function(dados){
                    $("#codigoClientes").val(dados._id)
                    $("#nomeCompleto").val(dados.nomeCompleto)
                    $("#dataNascimento").val(dados.dataNascimento)
                    $("#email").val(dados.email)
                    $("#tipoPessoa").val(dados.tipoPessoa)
                    $("#cpf").val(dados.cpf);
                    $("#rg").val(dados.rg);
                    $("#genero").val(dados.genero);
                    $("#contato").val(dados.contato);
                    $("#telComercial").val(dados.telComercial);
                    $("#telCelular").val(dados.telCelular);
                    $("#cargo").val(dados.cargo);
                    $("#cep").val(dados.cep);
                    $("#rua").val(dados.rua);
                    $("#casaNumero").val(dados.casaNumero);
                    $("#cidade").val(dados.cidade);
                    $("#bairro").val(dados.bairro);
                    $("#estado").val(dados.estado);
                    console.log(dados);
                });// fim do getJSON btn
            });// fim btn-carregar
        });// fim do getJSON url

        // salvar produto
        $("#btn-salvar-clientes").click(function(){
            $("#form-editar-clientes").submit();
        });// fim do btn salvar produto
    
});
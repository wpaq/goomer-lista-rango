# Excluir Produto do Restaurante

> ## Caso de sucesso

1. ❌ Recebe uma requisição do tipo **DELETE** na rota **/api/product/${productId}**
2. ❌ **Valida** o parâmetro **productId**
3. ❌ **Exclui** o produto com o **productId** informado
4. ❌ Retorna **204** caso o produto tenha sido excluído

> ## Exceções

1. ❌ Retorna erro **404** se a API não existir
2. ❌ Retorna erro **403** se o **productId** passado na URL for inválido
3. ❌ Retorna erro **500** se der erro ao tentar excluir o produto
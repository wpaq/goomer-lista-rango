# Listar Produto do Restaurante Pelo ID

> ## Caso de sucesso

1. ❌ Recebe uma requisição do tipo **GET** na rota **/api/product/${productId}**
2. ❌ **Valida** o parâmetro **productId**
3. ❌ Retorna **204** se não tiver nenhum produto
4. ❌ Retorna **200** com os dados do produto

> ## Exceções

1. ❌ Retorna erro **404** se a API não existir
2. ❌ Retorna erro **403** se o **productId** passado na URL for inválido
3. ❌ Retorna erro **500** se der erro ao tentar listar o produto
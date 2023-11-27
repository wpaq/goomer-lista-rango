# Atualizar Produto do Restaurante

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **PUT** na rota **/api/product/${productId}**
2. ❌ **Valida** o parâmetro **productId**
3. ✅ **Atualiza** o produto com os dados fornecidos
4. ✅ Retorna **200** com os dados do produto atualizado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **403** se o **productId** passado na URL for inválido
3. ✅ Retorna erro **500** se der erro ao tentar atualizar o produto
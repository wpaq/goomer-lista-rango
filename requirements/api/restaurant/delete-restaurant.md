# Excluir Restaurante

> ## Caso de sucesso

1. ✅  Recebe uma requisição do tipo **DELETE** na rota **/api/restaurant/${restaurantId}**
2. ✅ **Valida** o parâmetro **restaurantId**
3. ✅  **Exclui** o restaurante com o **restaurantId** informado
4. ✅  Retorna **204** caso o restaurante tenha sido excluído

> ## Exceções

1. ✅  Retorna erro **404** se a API não existir
2. ✅  Retorna erro **403** se o **restaurantId** passado na URL for inválido
3. ✅  Retorna erro **500** se der erro ao tentar excluir o restaurante
# Atualizar Restaurante

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **PUT** na rota **/api/restaurant/${restaurantId}**
2. ✅ **Valida** o parâmetro **restaurantId**
3. ✅ **Atualiza** o restaurante com os dados fornecidos
4. ✅ Retorna **200** com os dados do restaurante atualizado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **403** se o **restaurantId** passado na URL for inválido
3. ✅ Retorna erro **500** se der erro ao tentar atualizar o restaurante
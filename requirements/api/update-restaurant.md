# Atualizar Restaurante

> ## Caso de sucesso

1. ❌ Recebe uma requisição do tipo **PUT** na rota **/api/restaurant**
2. ❌ Valida dados obrigatórios **restaurantId**
3. ❌ **Busca** o restaurante com o **restaurantId** fornecido
4. ❌ **Atualiza** o restaurante com os dados fornecidos
5. ❌ Retorna **200** com os dados do restaurante atualizado

> ## Exceções

1. ❌ Retorna erro **404** se a API não existir
2. ❌ Retorna erro **400** se restaurantId não for fornecido pelo client
3. ❌ Retorna erro **403** se o restaurantId passado for inválido
4. ❌ Retorna erro **500** se der erro ao tentar atualizar o restaurante
# Criar Produto do Restaurante

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/product**
2. ✅ Valida dados obrigatórios **photo**, **name**, **price**, **restaurantId** e **category**
3. ✅ **Cria** um produto com os dados fornecidos
4. ✅ Retorna **200** com os dados do produto adicionado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se **photo**, **name**, **price**, **restaurantId** ou **category** não forem fornecidos pelo client
3. ✅ Retorna erro **500** se der erro ao tentar criar o produto
# Criar Restaurante

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/restaurant**
2. ✅ Valida dados obrigatórios **photo**, **name**, **address** e **openingHours**
3. ✅ **Valida** que o campo **openingHours** é um horário válido, HH:mm
4. ✅ **Valida** se já existe um restaurante com o **name** fornecido
5. ✅ **Cria** um restaurante com os dados fornecidos
6. ✅ Retorna **200** com os dados do restaurante adicionado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se **photo**, **name**, **address** ou **openingHours** não forem fornecidos pelo client
3. ✅ Retorna erro **400** se o campo **openingHours** não for um horário válido, HH:mm
4. ✅ Retorna erro **500** se der erro ao tentar criar o restaurante
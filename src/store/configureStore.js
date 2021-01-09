// Importando utilitários da toolkit do Redux.
import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

// Definindo os middlewares mantendo o que vem por padrão.
const middleware = [...getDefaultMiddleware()];
// Combinando reducers para criar o reducer da aplicação.
const reducer = combineReducers({
    todo: (state, action) => ({
        description: "Ler livro",
        list: [{
            _id: 1,
            description: "Pagar fatura do cartão.",
            done: true
        }, {
            _id: 2,
            description: "Reunião com a equipe às 10:00h",
            done: false
        }, {
            _id: 3,
            description: "Consulta médica na terça depois do almoço.",
            done: false
        }]
    })
});

// Criando a store passando o reducer e os middlewares.
const store = configureStore({ reducer, middleware });

export default store;

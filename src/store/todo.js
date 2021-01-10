const CHANGE_DESCRIPTION = "todo/changeDescription";

const initialState = {
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
};

export const changeDescription = (payload) => ({ type: CHANGE_DESCRIPTION, payload }); 

export default function todo(state = initialState, action) {
    switch (action.type) {
        case CHANGE_DESCRIPTION: return { ...state, description: action.payload };
        default: return state;
    }
}

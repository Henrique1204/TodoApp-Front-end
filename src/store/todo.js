// Importando utilitários do Redux.
import { createSlice } from "@reduxjs/toolkit";

const URL = "http://localhost:3003/api/todo";

// Criando slice.
const slice = createSlice({
    name: "todo",
    initialState: {
        description: "",
        list: null
    },
    reducers: {
        changeDescription(state, action) {
            state.description = action.payload;
        },
        search(state, action) {
            state.list = action.payload;
        }
    }
});

export const { search, changeDescription } = slice.actions;

export const fetchSearch = (payload = "") => async (dispatch) => {
    const query = payload ? `&description__regex=/${payload}/` : "";

    const res = await fetch(`${URL}?sort=-createdAt${query}`);
    const dados = await res.json();

    if (res.status === 200) dispatch(search(dados));
};

export const fetchAdd = (payload) => async (dispatch) => {
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ description: payload })
    });

    if (res.status === 201) {
        dispatch(fetchSearch());
        dispatch(changeDescription(""));
    }
};

export default slice.reducer;

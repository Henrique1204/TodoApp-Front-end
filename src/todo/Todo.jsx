import React from "react";
// Importando compoenentes da interface.
import PageHeader from "../template/PageHeader.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions.
import { fetchSearch } from "../store/todo.js";

const URL = "http://localhost:3003/api/todo";

const Todo = () => {
    const { description } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleRemove = async (id) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "delete"
        });

        if (res.status === 204) dispatch(fetchSearch(description));
    };

    const handleClear = () => dispatch(fetchSearch());

    React.useEffect(() => dispatch(fetchSearch()), [dispatch]);

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm
                handleClear={handleClear}
            />

            <TodoList
                handleRemove={handleRemove}
            />
        </div>
    );
};

export default Todo;

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

    const handleAdd = async () => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description })
        });

        if (res.status === 201) dispatch(fetchSearch());
    };

    const handleRemove = async (id) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "delete"
        });

        if (res.status === 204) dispatch(fetchSearch(description));
    };

    const handleMarkAsDone = async (id, desc) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ desc, done: true })
        });

        if (res.status === 200) dispatch(fetchSearch(description));
    };

    const handleMarkAsPending = async (id, desc) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ desc, done: false })
        });

        if (res.status === 200) dispatch(fetchSearch(description));
    };

    const handleClear = () => dispatch(fetchSearch());

    React.useEffect(() => dispatch(fetchSearch()), [dispatch]);

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm
                handleAdd={handleAdd}
                handleClear={handleClear}
            />

            <TodoList
                handleRemove={handleRemove}
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPending}
            />
        </div>
    );
};

export default Todo;

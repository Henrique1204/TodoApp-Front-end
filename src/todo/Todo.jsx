import React from "react";
// Importando compoenentes da interface.
import PageHeader from "../template/PageHeader.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
// Importando utilitários do Redux.
import { useDispatch } from "react-redux";
// Importando actions.
import { fetchSearch } from "../store/todo.js";

const Todo = () => {
    const dispatch = useDispatch();

    React.useEffect(() => dispatch(fetchSearch()), [dispatch]);

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default Todo;

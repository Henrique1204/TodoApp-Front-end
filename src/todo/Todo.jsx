import React from "react";
// Importando compoenentes da interface.
import PageHeader from "../template/PageHeader.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default Todo;

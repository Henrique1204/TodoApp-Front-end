import React from "react";
// Importando compoenentes da interface.
import PageHeader from "../template/PageHeader.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const handleAdd = () => {
        console.log("Adicionou");
    };

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm handleAdd={handleAdd} />
            <TodoList />
        </div>
    );
};

export default Todo;

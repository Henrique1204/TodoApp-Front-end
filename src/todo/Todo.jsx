import React from "react";
// Importando compoenentes da interface.
import PageHeader from "../template/PageHeader.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const URL = "http://localhost:3003/api/todo";

const Todo = () => {
    const [description, setDescription] = React.useState("");
    const [list, setLista] = React.useState([]);

    const handleAdd = async () => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description })
        });

        const json = await res.json();
    };

    const handleChange = ({ target }) => setDescription(target.value);

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm handleAdd={handleAdd} description={description} handleChange={handleChange} />
            <TodoList />
        </div>
    );
};

export default Todo;

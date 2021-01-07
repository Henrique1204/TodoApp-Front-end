import React from "react";
// Importando compoenentes da interface.
import PageHeader from "../template/PageHeader.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const [description, setDescription] = React.useState("");
    const [list, setLista] = React.useState([]);

    const handleAdd = () => {
        console.log(description);
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

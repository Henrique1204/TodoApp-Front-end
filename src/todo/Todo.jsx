import React from "react";
// Importando compoenentes da interface.
import PageHeader from "../template/PageHeader.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

const URL = "http://localhost:3003/api/todo";

const Todo = () => {
    const [description, setDescription] = React.useState("");
    const [list, setList] = React.useState(null);

    const handleAdd = async () => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description })
        });

        if(res.status === 201) refresh();
    };

    const handleChange = ({ target }) => setDescription(target.value);

    const refresh = async () => {
        const res = await fetch(`${URL}?sort=-createdAt`);
        const json = await res.json();

        if (res.status === 200) {
            setDescription("");
            setList(json);
        }
    }

    const handleRemove = async (id) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "delete"
        });

        if(res.status === 204) refresh();
    }

    React.useEffect(() => {
        if(!list) refresh();
    }, [list]);

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm handleAdd={handleAdd} description={description} handleChange={handleChange} />
            {list && <TodoList list={list} handleRemove={handleRemove} />}
        </div>
    );
};

export default Todo;

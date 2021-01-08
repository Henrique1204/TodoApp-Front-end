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

    const refresh = async (description = "") => {
        const search = description ? `&description__regex=/${description}/` : "";

        const res = await fetch(`${URL}?sort=-createdAt${search}`);
        const json = await res.json();

        if (res.status === 200) {
            setDescription(description);
            setList(json);
        }
    };

    const handleRemove = async (id) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "delete"
        });

        if(res.status === 204) refresh(description);
    };

    const handleMarkAsDone = async (id, description) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description, done: true })
        });

        if(res.status === 200) refresh(description);
    };

    const handleMarkAsPending = async (id, description) => {
        const res = await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description, done: false })
        });

        if(res.status === 200) refresh(description);
    };

    const handleSearch = () => {
        refresh(description);
    };

    React.useEffect(() => {
        if(!list) refresh();
    }, [list]);

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm 
                description={description}
                handleChange={handleChange}
                handleAdd={handleAdd}
                handleSearch={handleSearch}
            />
            {list && (
                <TodoList
                    list={list}
                    handleRemove={handleRemove}
                    handleMarkAsDone={handleMarkAsDone}
                    handleMarkAsPending={handleMarkAsPending}
                />
            )}
        </div>
    );
};

export default Todo;

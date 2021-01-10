import React from "react";
// Importando componentes da interface.
import IconButton from "../template/IconButton";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
import { fetchRemove, markAsDone, markAsPending } from "../store/todo";

const TodoList = () => {
    const { list, description } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const renderRows = () => {
        const data = list || [];
        return data.map((todo) => (
            <tr key={todo._id} >
                <td className={(todo.done) ? "markedIsDone" : ""} >{todo.description}</td>
    
                <td>
                    <IconButton
                        styleBtn="success"
                        icon="check"
                        hide={todo.done}
                        click={() => dispatch(markAsDone({ todo, description }))}
                    />

                    <IconButton
                        styleBtn="warning"
                        icon="undo"
                        hide={!todo.done}
                        click={() => dispatch(markAsPending({ todo, description }))}
                    />

                    <IconButton
                        styleBtn="danger"
                        icon="trash-o"
                        hide={!todo.done}
                        click={() => dispatch(fetchRemove({ todo, description }))}
                    />
                </td>
            </tr>
        ));
    };

    if (!list) return null;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions" >Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

export default TodoList;

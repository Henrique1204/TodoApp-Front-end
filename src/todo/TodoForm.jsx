import React from "react";
// Importando componentes da interface.
import Grid from "../template/Grid.jsx";
import IconButton from "../template/IconButton.jsx";
// Importando utilitários do Redux.
import { useDispatch, useSelector } from "react-redux";
// Importando actions.
import { changeDescription, fetchSearch, fetchAdd, clearSearch } from "../store/todo.js";

const TodoForm = () => {
    const { description } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const keyHandler = ({ key, shiftKey }) => {
        if (key === "Enter") {
            shiftKey ? dispatch(fetchSearch(description)) : dispatch(fetchAdd(description));
        } else if (key === "Escape") {
            dispatch(clearSearch());
        }
    };

    return (
        <div className="TodoForm row mb-5">
            <Grid cols="12 9 10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={description}
                    onChange={({ target }) => dispatch(changeDescription(target.value))}
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton styleBtn="primary" icon="plus" click={() => dispatch(fetchAdd(description))} />
                <IconButton styleBtn="info" icon="search" click={() => dispatch(fetchSearch(description))} />
                <IconButton styleBtn="secondary" icon="close" click={() => dispatch(clearSearch())} />
            </Grid>
        </div>
    );
};

export default TodoForm;

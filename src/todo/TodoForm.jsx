import React from "react";
// Importando componentes da interface.
import Grid from "../template/Grid.jsx";
import IconButton from "../template/IconButton.jsx";


const TodoForm = ({ description, handleChange, handleAdd, handleSearch }) => {
    return (
        <div className="TodoForm row">
            <Grid cols="12 9 10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={description}
                    onChange={handleChange}
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton styleBtn="primary" icon="plus" click={handleAdd} />
                <IconButton styleBtn="info" icon="search" click={handleSearch} />
            </Grid>
        </div>
    );
};

export default TodoForm;

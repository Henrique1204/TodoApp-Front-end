import React from "react";
// Importando componentes da interface.
import Grid from "../template/Grid.jsx";
import IconButton from "../template/IconButton.jsx";


const TodoForm = ({ handleAdd, handleChange, description }) => {
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
            </Grid>
        </div>
    );
};

export default TodoForm;

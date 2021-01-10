import React from "react";
// Importando componentes da interface.
import Grid from "../template/Grid.jsx";
import IconButton from "../template/IconButton.jsx";
// Importando utilitários do Redux.
import { connect } from "react-redux";

const TodoForm = ({ description, handleChange, handleAdd, handleSearch, handleClear }) => {
    const keyHandler = ({ key, shiftKey }) => {
        if (key === "Enter") {
            shiftKey ? handleSearch() : handleAdd();
        } else if (key === "Escape") {
            handleClear();
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
                    onChange={handleChange}
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton styleBtn="primary" icon="plus" click={handleAdd} />
                <IconButton styleBtn="info" icon="search" click={handleSearch} />
                <IconButton styleBtn="secondary" icon="close" click={handleClear} />
            </Grid>
        </div>
    );
};

const mapStateToProps = ({ todo }) => ({ description: todo.description });

export default connect(mapStateToProps)(TodoForm);

import React from "react";
// Importando componentes da interface.
import Grid from "../template/Grid.jsx";
import IconButton from "../template/IconButton.jsx";
// Importando utilitários do Redux.
import { connect } from "react-redux";
// Importando actions.
import { changeDescription } from "../store/todo.js";

const TodoForm = ({ description, changeDescriptionProps, handleAdd, handleSearch, handleClear }) => {
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
                    onChange={({ target }) => changeDescriptionProps(target.value)}
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

// Mapeando os valores do state global e passando como propriedade pro componente.
const mapStateToProps = ({ todo }) => ({ description: todo.description });
// Mepeando os dispatch e passando como propriedade pro componente.
const mapDispatchToProps = (dispatch) => ({
    changeDescriptionProps(payload) {
        dispatch(changeDescription(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

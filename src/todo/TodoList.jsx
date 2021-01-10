import React from "react";
// Importando componentes da interface.
import IconButton from "../template/IconButton";
// Importando utilitários do Redux.
import { connect } from "react-redux";

const TodoList = ({ list, handleRemove, handleMarkAsDone, handleMarkAsPending }) => {
    const renderRows = () => {
        const data = list || [];
        return data.map(({ _id, description, done }) => (
            <tr key={_id} >
                <td className={(done) ? "markedIsDone" : ""} >{description}</td>
    
                <td>
                    <IconButton styleBtn="success" icon="check" hide={done} click={() => handleMarkAsDone(_id, description)} />
                    <IconButton styleBtn="warning" icon="undo" hide={!done} click={() => handleMarkAsPending(_id, description)} />
                    <IconButton styleBtn="danger" icon="trash-o" hide={!done} click={() => handleRemove(_id)} />
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

// Mapeando os valores do state global e passando como propriedade pro componente.
const mapStateToProps = ({ todo }) => ({ list: todo.list });

export default connect(mapStateToProps)(TodoList);

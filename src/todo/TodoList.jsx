import React from "react";
import IconButton from "../template/IconButton";

const TodoList = ({ list, handleRemove }) => {
    const renderRows = () => {
        const data = list || [];
        return data.map(({ _id, description  }) => (
            <tr key={_id} >
                <td>{ description }</td>
                <td>
                    <IconButton styleBtn="danger" icon="trash-o" click={() => handleRemove(_id)} />
                </td>
            </tr>
        ));
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

export default TodoList;

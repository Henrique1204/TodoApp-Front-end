import React from "react";

const TodoForm = () => {
    return (
        <div className="TodoForm row">
            <div className="col-xs-12 col-sm-9 col-md-10">
                <input type="text" className="form-control" placeholder="Adicione uma tarefa" />
            </div>

            <div className="col-xs-12 col-sm-3 col-md-2">
                <button className="btn btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );
};

export default TodoForm;

import React from "react";

const IconButton = ({ hide, styleBtn, click, icon }) => {
    if (hide) {
        return null;
    }

    return (
        <button className={`btn btn-${styleBtn}`} onClick={click} >
            <i className={`fa fa-${icon}`}></i>
        </button>
    );
};

export default IconButton;

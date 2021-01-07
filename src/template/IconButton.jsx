import React from "react";
import If from "../template/If.jsx";

const IconButton = ({ hide, styleBtn, click, icon }) => {
    return (
        <If test={!hide} >
            <button className={`btn btn-${styleBtn}`} onClick={click} >
                <i className={`fa fa-${icon}`}></i>
            </button>
        </If>
    );
};

export default IconButton;

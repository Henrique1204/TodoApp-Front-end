import React from "react";

const PageHeader = ({ name, small }) => {
    return (
        <header className="pb-2 mt-4 mb-2 border-bottom">
            <h2>{name} <small className="h5 text-secondary" >{small}</small> </h2>
        </header>
    );
};

export default PageHeader;

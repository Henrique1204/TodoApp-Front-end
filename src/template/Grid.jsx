import React from "react";

const Grid = ({ cols, children }) => {
    const toCssClasses = (numbers) => {
        const cols = (numbers) ? numbers.split(" ") : [];
        let classes = "";

        if (cols[0]) classes += `col-xs-${cols[0]}`;
        if (cols[1]) classes += ` col-sm-${cols[1]}`;
        if (cols[2]) classes += ` col-md-${cols[2]}`;
        if (cols[3]) classes += ` col-lg-${cols[3]}`;

        return classes;
    };

    return <div className={toCssClasses(cols || 12)}>{children}</div>;
};

export default Grid;

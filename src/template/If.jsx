import React from "react";

const If = ({ test, children }) => {
    if (test) {
        return children;
    } else {
        return null;
    }
};

export default If;

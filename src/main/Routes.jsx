import React from "react";
// Importando componentes da interface.
import Todo from "../todo/Todo.jsx";
import About from "../about/About.jsx";
// Importando componentes externos.
import { Routes as Router, Route } from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <Route path="/todo" element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Todo />} />
        </Router>
    );
};

export default Routes;

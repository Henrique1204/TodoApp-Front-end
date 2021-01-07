import React from "react";
// Importando componentes da interface.
import Todo from "../todo/Todo.jsx";
import About from "../about/About.jsx";

const App = () => {
    return (
        <div className="container">
            <Todo />
            <About />
        </div>
    );
};

export default App;

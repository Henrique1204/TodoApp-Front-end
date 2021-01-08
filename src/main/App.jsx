import React from "react";
// Importando estilo.
import "./App.css";
// Importando componentes da interface.
import Routes from "./Routes.jsx";
import Menu from "../template/Menu.jsx";
// Importando componentes externos.
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Menu />
                <Routes />
            </div>
        </BrowserRouter>
    );
};

export default App;

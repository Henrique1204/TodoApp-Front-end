import React from "react";
// Importando componentes externos.
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark text-white">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>

                <div id="navbar" className="navbar-collapse collapse show">
                    <ul className="nav navbar-nav">
                        <li className="nav-item" ><NavLink className="nav-link" to="/todo">Tarefas</NavLink></li>
                        <li className="nav-item" ><NavLink className="nav-link" to="/about">Sobre</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;

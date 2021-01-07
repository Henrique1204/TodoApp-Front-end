import React from "react";
// Importando compoenentes da interface.
import PageHeader from "../template/PageHeader.jsx";

const About = () => {
    return (
        <div>
            <PageHeader name="Sobre" small="Nós" />

            <h2>Nossa História</h2>
            <p>Lorem impsum dolor it amet...</p>

            <h2>Missão e Visão</h2>
            <p>Lorem impsum dolor it amet...</p>

            <h2>Imprensa</h2>
            <p>Lorem impsum dolor it amet...</p>
        </div>
    );
};

export default About;

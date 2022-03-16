import React from "react";
import {useHistory} from "react-router-dom";
import "./BackButton.css";


function BackButton() {

    const history = useHistory();

    return (
        <button onClick={history.goBack} className="back-button">Terug naar vorige pagina</button>
    );
}

export default BackButton;
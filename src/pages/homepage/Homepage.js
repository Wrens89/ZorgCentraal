import React from "react";
import {Link} from "react-router-dom";
import agenda from "../../assets/agenda.png";
import dossier from "../../assets/dossier.png";
import medicine from "../../assets/medicine.png";
import "./Homepage.css";

function Homepage() {
    return (
        <>
            <h1>Hartelijk welkom bij ZorgCentraal</h1>
            <div className="intro-container">
            <article>
                <h3>Regel uw zorg wanneer het u uitkomt!</h3>
                <p>Bij ZorgCentraal kunt u 24 uur per dag, 7 dagen in de week uw zorgzaken online regelen.</p>
            </article>
            </div>
            <div className="uitleg-container">
                <article>
                    <h3>ZorgCentraal altijd en overal</h3>
                    <p>ZorgCentraal is een digitale omgeving waarmee u op een eenvoudige en snelle manier uw
                    gezondheidszaken kunt regelen.</p>
                    <div className="key-points">
                        <div className="keypoint_image">
                            <img src={agenda} alt="agenda" className="image"/>
                            <h6>Afspraak maken</h6>
                        </div>
                        <div className="keypoint_image">
                            <img src={dossier} alt="dossier" className="image"/>
                            <h6>Dossier bekijken</h6>
                        </div>
                        <div className="keypoint_image">
                            <img src={medicine} alt="medicijn" className="image"/>
                            <h6>Medicijnen</h6>
                        </div>
                    </div>
                </article>
            </div>
            <section>
                <p>Als u ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
                <p>U kunt ook <Link to="/signin">inloggen</Link> of uzelf <Link to="/signup">registeren</Link> als u nog geen
                    account hebt. Bent u een zorgverlener? <Link to="/profile-caretaker">Klik</Link> dan hier.</p>
            </section>

        </>
    );
}

export default Homepage;
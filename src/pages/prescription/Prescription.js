import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import BackButton from "../../components/backbutton/BackButton";
import "./Prescription.css";

function Prescription() {

    const [medicine, setMedicine] = useState({});
    const {user} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [agreeMedicine, toggleAgreeMedicine] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('patienttoken');

        if (user && user.username === "admin") {
            async function getMedicine() {
                setError('');
                toggleLoading(true);

                try {
                    const result = await axios.get('http://localhost:3000/prescription', {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                    setMedicine(result);
                } catch (e) {
                    setError(`De data wordt niet geladen. (${e.message}`);
                    console.error(e);
                }
                toggleLoading(false);
            }
            getMedicine();
        } else {
            console.log("Admin is niet ingelogd.");
        }
    }, []);

    return (
        <>
            <section>
                <div>
                    <h1 className="prescription">
                        Herhaalrecept aanvragen
                    </h1>
                    <h3 className="prescription-medicine">Medicijnen</h3>
                </div>
                <article>
                    <input
                        type="checkbox"
                        name="agree"
                        id="agree-field"
                        value={agreeMedicine}
                        onChange={(e) => toggleAgreeMedicine(e.target.checked)}
                        />
                    <label htmlFor="agree-field">Herhaalrecept aanvragen</label>

                </article>
            </section>
            <br/>
            <BackButton/>
        </>
    );
}

export default Prescription;
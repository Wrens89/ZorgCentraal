import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import BackButton from "../../components/backbutton/BackButton";
import './File.css';

function File() {

    const [seeFile, setSeeFile] = useState({});
    const {user} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('patienttoken');

        if (user && user.username === "admin") {
            async function getSeeFile() {
                setError('');
                toggleLoading(true);

                try {
                    const result = await axios.get('http://localhost:3000/file', {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                    setSeeFile(result);
                } catch (e) {
                    setError(`De data wordt niet geladen. (${e.message}`);
                    console.error(e);
                }
                toggleLoading(false);
            }
            getSeeFile();
                } else {
                        console.log("Admin is niet ingelogd.");
                    }
                }, []);
    return (
        <>
            <section>
                <div>
                    <h1>Dossier bekijken</h1>
                </div>
            </section>
            <div className="file-container">
                <button className="click-file">Mijn metingen</button>
                <button className="click-file">Mijn gegevens</button>
                <button className="click-file">Mijn medicatielijst</button>
            </div>
            <br/>
            <BackButton/>
        </>
    );
}

export default File;
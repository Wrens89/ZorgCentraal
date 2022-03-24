import React, {useState} from "react";
import BackButton from "../../components/backbutton/BackButton";
import {set} from "react-hook-form";

function Family() {
    const [family, setFamily] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [related, toggleRelated] = useState('directe familie');

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
    }

    return (
        <>
            <div>
                <h1>Hier kunt u uw familie beheren</h1>
            </div>

            <div>
                <h3>Familie toevoegen</h3>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname-field">
                        Voornaam:
                        <input
                            type="text"
                            id="firstname-field"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </label>

                    <label htmlFor="lastname-field">
                        Achternaam:
                        <input
                            type="text"
                            id="lastname-field"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            />
                    </label>

                    <section>
                        <label htmlFor="{related}">Hoe bent u verwant?</label>
                    <select
                        name="related"
                        id={related}
                        value={related}
                        onChange={(e) => toggleRelated(e.target.value)}
                        >
                            <option value="Echtgenoot/Echtgenote">Echtgenoot/Echtgenote</option>
                            <option value="Directe familie">Directe familie</option>
                            <option value="Geen familie">Geen familie</option>
                    </select>
                </section>
                </form>


            </div>
        <br/>
        <BackButton/>
        </>
    )
}

export default Family;
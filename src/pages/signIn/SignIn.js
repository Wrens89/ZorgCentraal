import React, {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {Link} from "react-router-dom";
import "./SignIn.css";
import BackButton from "../../components/backbutton/BackButton";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:3000/login',  {
                email: email,
                password: password,
            });

            console.log(result.data);

            login(result.data.accessToken);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>

            <h1>Inloggen</h1>
                <div className="form_content">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                    />
                </label>
                {email && <p className="error">Combinatie van email en wachtwoord is onjuist.</p> }

                <button
                    type="submit"
                    className="form-button"
                    >
                    Inloggen
                </button>
            </form>
                </div>
            <p>Heeft u nog geen account? Registreer u <Link to="/signup">hier</Link>.</p>
            <BackButton/>
        </>
    );
}

export default SignIn;

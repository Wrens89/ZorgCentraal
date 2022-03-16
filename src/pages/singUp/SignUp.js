import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import BackButton from "../../components/backbutton/BackButton";


function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const source = axios.CancelToken.source();
    const history = useHistory();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:3000/register', {
                email: email,
                password: password,
                username: username,
            }, {
                cancelToken: source.token,
            });
            history.push('/signin');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>
            <h1>Registreren</h1>
            <div class="form_content">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="password-field">
                       Wachtwoord:
                       <input
                        type="text"
                        id="password-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       />
                </label>
                {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                    >
                    Registreren
                </button>
            </form>
            </div>
            <p>Heeft u al een account? <Link to="/sigin">Hier</Link> kunt u inloggen.</p>
        <BackButton/>
        </>
    );
}

export default SignUp;
import React, {useContext} from "react";
import stethoscoop from '../../assets/stethoscoop.png';
import {AuthContext} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom";
import './NavBar.css';

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();

    return (
        <nav className="nav">
            <Link to="/">
                <span className="logo-container">
                    <img src={stethoscoop} alt={stethoscoop}/>
                    <h3>
                        ZorgCentraal
                    </h3>
                </span>
            </Link>

            {isAuth ?
                <button
                    type="button"
                    onClick={logout}
                    >
                    Log uit
                </button>
                :
                <div>
                    <button
                        type="button"
                        onClick={() => history.push('/signin')}
                        >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                        >
                        Registreren
                    </button>
                </div>
            }
        </nav>
    );
}

export default NavBar;
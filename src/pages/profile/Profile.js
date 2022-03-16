import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import "./Profile.css";
import BackButton from "../../components/backbutton/BackButton";


function Profile() {

    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext);


    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('http://localhost:3000/660/private-content', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token},`
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchProfileData();
    }, [])

    return (
        <>
            <div className="patient_container">
                <div className="dropdown">
                    <button className="dropbtn">Patiënt</button>
                    <div className="dropdown-content">
                        <a href="#">Herhaalrecept aanvragen</a>
                        <a href="#">Dossier bekijken</a>
                        <a href="#">Zorgverlener toevoegen</a>
                        <a href="#">Vitale functies</a>
                        <a href="#">Familie beheren</a>
                        <a href="#">Persoonsgegevens aanpassen</a>
                        <a href="#">Uitloggen</a>
                    </div>
                </div>
            </div>
            <div className="patient_container">
                <div className="dropdown">
                    <button className="dropbtn">Huisarts</button>
                    <div className="dropdown-content">
                        <a href="#">Afspraak maken</a>
                        <a href="#">Herhaalrecept aanvragen</a>
                    </div>
                </div>
            </div>
            <div className="patient_container">
                <div className="dropdown">
                    <button className="dropbtn">Familie</button>
                    <div className="dropdown-content">
                        <a href="#">Familie toevoegen</a>
                    </div>
                </div>
            </div>
            <BackButton/>
        </>
    );
}

export default Profile;
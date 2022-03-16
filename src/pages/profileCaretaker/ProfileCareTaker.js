import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import "../profile/Profile.css";
import BackButton from "../../components/backbutton/BackButton";


function ProfileCareTaker() {

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
    },[])

    return (
        <>
            <div className="doctor_container">
                <div className="dropdown">
                    <button className="dropbtn">Huisarts</button>
                    <div className="dropdown-content">
                        <a href="#">Patiënt kiezen</a>
                    </div>
                </div>
            </div>
            <BackButton/>
        </>
    );
}

export default ProfileCareTaker;
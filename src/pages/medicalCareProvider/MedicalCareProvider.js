import React, {useEffect, useState} from "react";
import BackButton from "../../components/backbutton/BackButton";
import axios from "axios";
import {useForm} from 'react-hook-form';

function MedicalCareProvider() {


    const [careProvider, setCareProvider] = useState([]);
    const [endpoint, setEndpoint] = useState(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCENyOG8kCtzZTksHomkhu2FE8YsoNrSIs&language=NL`);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const {handleSubmit, formStat: {errors}} = useForm();

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);

            try {
                const {data} = await axios.get(endpoint);
                setCareProvider(data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
            toggleLoading(false);
        }

        fetchData()
    }, [endpoint]);

    async function onFormSubmitProvider(dataProvider) {
        console.log("Zoek zorgaanbieders data input:");
        console.log(dataProvider);
        setError('');
        toggleLoading(true);
        console.log("ProviderEntry als string:");
        console.log(careProvider);
        try {
            const result = await  axios.get(`http://localhost:3000/careprovider?zorgaanbieder=${dataProvider.provider}`);
            setCareProvider(result);
            console.log("Alle result inhoud:");
            console.log(result);
            setTimeout(() => {
                window.scrollTo({top: 1100, behavior: 'smooth'})
            }, 0);
        } catch (error) {
            setError(`Er is iets misgegaan bij het ophalen van de data - (${error.message})`);
            console.log(error);
        }
        toggleLoading(false);
    }



return (
    <>
        <section>
            <h1>Zorgverlener toevoegen</h1>
            <div>
                <p>Hier kunt u uw eigen zorgverlener toevoegen. Zodra u uw zorgverlener heeft gevonden, zal uw
                    zorgverlener het accepteren.</p>
            </div>
            <section>
            <form className="form-container" onSubmit={handleSubmit(onFormSubmitProvider)}>

                    <label htmlFor="title-field">Zoek hier uw zorgaanbieder:</label>
                <input
                    inputType="text"
                    errors={errors}
                    labelText="zorgverlener"
                    labelId="title-field"
                    inputName="zorgverlener"
                    placeholderText="Type zorgaanbieder"
                    />
                    <button type="submit">
                        Zoeken
                    </button>
            </form>
                 </section>



        </section>
        {loading && <p>Loading...</p>}
        {error && <p>Er ging iets mis bij het ophalen van de data...</p>}
    <BackButton/>
    </>
)
}

export default MedicalCareProvider;
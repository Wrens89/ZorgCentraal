import React, {useState} from "react";
import BackButton from "../../components/backbutton/BackButton";
import thermometer from "../../assets/thermometer.png";
import bloeddrukmeter from "../../assets/bloeddrukmeter.png";
import saturatie from "../../assets/saturatie.png";
import "./VitalFunctions.css";

function VitalFunctions() {

    const [temperature, setTemperature] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [saturation, setSaturation] = useState('');

    return (
      <>
        <section>
            <div>
                <h1>Hier kunt u uw vitale functies invullen.</h1>
            </div>

            <div className="textBox">
                <h3 className="temperature">Temperatuur</h3>
                <img className="image" src={thermometer} alt="thermometer"/>
                <br/>
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    placeholder={`Typ hier uw temperatuur`}
                />

                <h3 className="temperature">Bloeddruk</h3>
                <img className="image" src={bloeddrukmeter} alt="bloeddrukmeter"/>
               <br/>
                <input
                    type="text"
                    value={bloodPressure}
                    onChange={(e) => setBloodPressure(e.target.value)}
                    placeholder={`Typ hier uw bloeddruk`}
                    />

                <h3 className="temperature">Saturatie</h3>
                <img className="image" src={saturatie} alt="saturatiemeter"/>
               <br/>
                <input
                    type="text"
                    value={saturation}
                    onChange={(e) => setSaturation(e.target.value)}
                    placeholder={`Typ hier uw saturatie`}
                />

            </div>

        </section>
          <br/>
          <BackButton/>
      </>

    );
}

export default VitalFunctions;
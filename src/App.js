import './App.css';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import NavBar from "./components/navbar/NavBar";
import React, {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/singUp/SignUp";
import Profile from "./pages/profile/Profile";
import Footer from "./components/footer/Footer";
import Prescription from "./pages/prescription/Prescription";
import File from "./pages/file/File";
import MedicalCareProvider from "./pages/medicalCareProvider/MedicalCareProvider";
import VitalFunctions from "./pages/vitalFunctions/VitalFunctions";
import Family from "./pages/family/Family";

function App() {
    const {isAuth} = useContext(AuthContext);

  return (
      <>
          <NavBar />
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/prescription">
          <Prescription/>
        </Route>
        <Route exact path="/file">
          <File/>
        </Route>
        <Route exact path="/careprovider">
          <MedicalCareProvider/>
        </Route>
        <Route exact path="/vitalfunctions">
          <VitalFunctions/>
        </Route>
        <Route exact path="/family">
          <Family/>
        </Route>
      </Switch>
    </div>
        <Footer />
    </>
  );
}

export default App;

/* probeersel */

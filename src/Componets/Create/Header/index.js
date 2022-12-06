import React from "react";
import { useNavigate } from "react-router-dom";
import'./styles.css'

const Header = () => {
    let navigate = useNavigate()

    const goSurveys = () => {
        navigate('/home')
    }
    return(
        <div className="header-wrapper-create">
            <button className="create-button-yellow" onClick={goSurveys}>Back</button>
            <h3 className="h3-header">cop4710</h3>
            <h1 className="h1-header">Create a new survey.</h1>
            <h2 className="h2-header">Follow the promps to create a new survey.</h2>

        </div>
    )
}
export default Header
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import'./styles.css'

const Header = () => {
    let navigate = useNavigate()
    const auth = getAuth();
    
    const user = auth.currentUser;  

    const goCreate = () => {
        navigate('/create')
    }
    const goView = () => {
        navigate('/mysurveys')
    }

    return(
        <div className="header-wrapper">
            <h3 className="h3-header">cop4710</h3>
            <h1 className="h1-header">Welcome Back </h1>
            <h2 className="h2-header">Create, take and view results from a variety of surveys.</h2>
            <div className="header-button-wrapper">
                <button className="header-button-yellow" onClick={goCreate}>Create new survey</button>
                <button className="header-button-white" onClick={goView}>View my Surveys</button>
            </div>
        </div>
    )
}
export default Header
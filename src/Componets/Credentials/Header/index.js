import React from "react";
import { useNavigate } from "react-router-dom";
import'./styles.css'

const Header = () => {
    let navigate = useNavigate()

    const goCreate = () => {
        navigate('/create')
    }
    const goSurveys = () => {
        navigate('/')
    }

    return(
        <div className="header-login-wrapper">
  
            <h3 className="h3-header">cop4710</h3>
            <h1 className="h1-header">Welcome!</h1>
            <h2 className="h2-header">Please login or create an account.</h2>

        </div>
    )
}
export default Header
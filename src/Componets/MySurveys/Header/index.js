import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth"
import'./styles.css'

const Header = () => {
    let navigate = useNavigate()

    const goCreate = () => {
        navigate('/create')
    }
    const goSurveys = () => {
        navigate('/home')
    }

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
        }).catch((error) => {
        // An error happened.
});
    }

    return(
        <div className="header-wrapper">
             <button className="create-button-yellow" onClick={goSurveys}>Back</button>
            <h3 className="h3-header">cop4710</h3>
            <h1 className="h1-header">Welcome Back.</h1>
            <h2 className="h2-header">Create, take and view results from a variety of surveys.</h2>
            <div className="header-button-wrapper">
                <button className="header-button-yellow" onClick={goCreate}>Create new survey</button>
                <button className="header-button-white" onClick={logout}>Log out</button>
                
            </div>
        </div>
    )
}
export default Header
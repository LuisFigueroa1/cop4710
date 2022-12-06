import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import'./styles.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth();

    

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/home')
            // ...
        })
        .catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate('/home')
            // ...
          })
          .catch((error) => {
            alert('user does not exist')
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    return(
        <div className="login-wrapper">
            <h3 className="h3-login">Email</h3>
            <input value = {email} className="login-input"onChange={(e)=> {setEmail(e.target.value)}}></input>
            <h3 className="h3-login">Password</h3>
            <input value = {password} type='password' className="login-input" onChange={(e)=> {setPassword(e.target.value)}}></input>
            <div className="button-wrapper">
                <button className="login-button-yellow"onClick={handleLogin} > Login</button>
                <button className="login-button-white" onClick={handleRegister}> Register</button>
            </div>
            
        </div>
    )
}
export default Login
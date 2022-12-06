import {React, useState, useEffect} from "react";
import'./styles.css'
import { getFirestore, doc, setDoc } from "firebase/firestore"; 
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const FormCreate = () => {

    let db = getFirestore()
    let navigate = useNavigate()
    

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
            const email = user.email;


            setCreator(email) 
            console.log(email)
        }
     
     
    }, [])
    

    

    const [creator, setCreator] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [question1, setQuestion1] = useState('')
    const [question2, setQuestion2] = useState('')

    const create = async() => {
        console.log(name)
        await setDoc(doc(db, "surveys", name), {
            name,
            creator,
            description,
            endDate,
            question1,
            question2,
            startDate,
        });
        navigate('/home')
    }
    
    return(
        <div className="form-wrapper">
            <h3 className="h3-form"> Survey Name</h3>
            <input className="form-input-regular" value = {name} onChange={(e)=>{setName(e.target.value)}}></input>

            <h3 className="h3-form"> Survey Description</h3>
            <textarea className="form-input-tall" value = {description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>

            <h3 className="h3-form"> Start and End date</h3>
            <div className="double-wrapper">

                <input className="form-input-short" value = {startDate} onChange={(e)=>{setStartDate(e.target.value)}}></input>
              
                <input className="form-input-short" value = {endDate} onChange={(e)=>{setEndDate(e.target.value)}}></input>
            </div>

            <h3 className="h3-form"> Type 1 Question (scale from 1 to 6)</h3>
            <input className="form-input-regular" value = {question1} onChange={(e)=>{setQuestion1(e.target.value)}}></input>

            <h3 className="h3-form"> Type 2 Question (paragraph)</h3>
            <input className="form-input-regular" value = {question2} onChange={(e)=>{setQuestion2(e.target.value)}}></input>

            <button className="form-button-yellow" onClick={create}>Create Survey</button>
        </div>
    )
}
export default FormCreate
import {React, useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import'./styles.css'

const Question1 = () => {
    
    let navigate = useNavigate()
    let params = useParams()
    let db = getFirestore()
    let survey = params.surveyName

    const [answer1, setAnswer1] = useState(null)
    const [answer2, setAnswer2] = useState('')

    const [surveyInfo, setSurveyInfo] = useState()
    const [creator, setCreator] =useState('')
    

    const [one, setOne] = useState('question-button-white')
    const [two, setTwo] = useState('question-button-white')
    const [three, setThree] = useState('question-button-white')
    const [four, setFour] = useState('question-button-white')
    const [five, setFive] = useState('question-button-white')
    const [six, setSix] = useState('question-button-white')
    

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

   
        const fetchSurvey = async() => {
            if (user !== null) {
                // The user object has basic properties such as display name, email, etc.
                    const email = user.email;
        
        
                    setCreator(email) 
                    console.log(email)
                }
        
            const docRef = doc(db, 'surveys', survey);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setSurveyInfo(docSnap.data())
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

        }

        fetchSurvey()
        
   
    }, [creator])
    
    const selectOne = () => {
        setAnswer1(1)
        setOne('question-button-yellow')
        setTwo('question-button-white')
        setThree('question-button-white')
        setFour('question-button-white')
        setFive('question-button-white')
        setSix('question-button-white')
    }

    const selectTwo = () => {
        setAnswer1(2)
        setOne('question-button-white')
        setTwo('question-button-yellow')
        setThree('question-button-white')
        setFour('question-button-white')
        setFive('question-button-white')
        setSix('question-button-white')
    }

    const selectThree = () => {
        setAnswer1(3)
        setOne('question-button-white')
        setTwo('question-button-white')
        setThree('question-button-yellow')
        setFour('question-button-white')
        setFive('question-button-white')
        setSix('question-button-white')
    }

    const selectFour = () => {
        setAnswer1(4)
        setOne('question-button-white')
        setTwo('question-button-white')
        setThree('question-button-white')
        setFour('question-button-yellow')
        setFive('question-button-white')
        setSix('question-button-white')
    }

    const selectFive = () => {
        setAnswer1(5)
        setOne('question-button-white')
        setTwo('question-button-white')
        setThree('question-button-white')
        setFour('question-button-white')
        setFive('question-button-yellow')
        setSix('question-button-white')
    }

    const selectSix = () => {
        setAnswer1(6)
        setOne('question-button-white')
        setTwo('question-button-white')
        setThree('question-button-white')
        setFour('question-button-white')
        setFive('question-button-white')
        setSix('question-button-yellow')
    }

    const submit = async() => {

        await setDoc(doc(db, "surveys", surveyInfo.name, 'results', creator), {
            answer1,
            answer2,
        });
        navigate('/home')

    }



    return(
        <>
        {surveyInfo && 
            <div className="question1-wrapper">
                <h1 className="h1-question">{surveyInfo.question1}</h1>
                <div className="buttons-wrapper">
                    <button className={one} onClick={selectOne}>1</button>
                    <button  className={two} onClick={selectTwo}>2</button>
                    <button  className={three} onClick={selectThree}>3</button>
                    <button  className={four} onClick={selectFour}>4</button>
                    <button className={five} onClick={selectFive}>5</button>
                    <button  className={six} onClick={selectSix}>6</button>

                </div>
                <h1 className="h1-question">{surveyInfo.question2}</h1>
                <textarea  value={answer2} onChange={(e)=>{setAnswer2(e.target.value)}} className ="question-text"/>
                <div className="header-button-wrapper">
                </div>

                <button className="form-button-yellow" onClick={submit}>Submit Survey</button>
            </div>
        }
        </>
    )
}
export default Question1
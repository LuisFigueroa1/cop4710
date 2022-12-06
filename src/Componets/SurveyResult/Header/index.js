import {React, useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import'./styles.css'

const Header = () => {
    
    let navigate = useNavigate()
    let params = useParams()
    let db = getFirestore()
    let survey = params.surveyName

    const [surveyInfo, setSurveyInfo] = useState()

    useEffect(() => {
        const fetchSurvey = async() => {
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
        
   
    }, [])
    

    const goSurveys = () => {
        navigate('/home')
    }


    return(
        <>
        
        {surveyInfo && 
            <div className="header-take-wrapper">
                 <button className="create-button-yellow" onClick={goSurveys}>Back</button>
                <h3 className="h3-header">cop4710</h3>
                <h1 className="h1-header">{surveyInfo.name}</h1>
                <h2 className="h2-header">{surveyInfo.description}</h2>
                <div className="header-button-wrapper">
                </div>
            </div>
        }
        </>
    )
}
export default Header
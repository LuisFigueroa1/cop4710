
import { React, useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import'./styles.css'
import { useNavigate } from "react-router-dom";

const Surveys = () => {

    let navigate = useNavigate()
    let db = getFirestore()
    const [surveyList, setSurveyList] = useState()
    
    
    useEffect(() =>  { 

        const getSurveys =  async () => {

            const q = query(collection(db, "surveys"));
    
            let surveys = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            surveys.push(doc.data())
            
        });
        console.log(surveys)
        setSurveyList(surveys)
        }

        getSurveys()
        
    },[])
    
    const getSurveys =  async () => {

        const q = query(collection(db, "surveys"));

        let surveys = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        surveys.push(doc.data())
        
    });
    console.log(surveys)
    setSurveyList(surveys)
    }

    const navigateSurvey = () => {


    }
    
    return(
        <>
              {surveyList && 
            <div className="surveys-wrapper">
            {surveyList.map((survey, index) => (
                <div className="survey-card" key={index} onClick={(e)=>  navigate('/survey/'+ survey.name )}> 
                    <h1 className="h1-surveys">{survey.name}</h1>
                    <h2 className="h2-surveys">{survey.creator}</h2>
                    <p className="p-surveys"> {survey.description}</p>
                    <h1 className="h1-surveys-white">TAKE!</h1>
                    <h3 className="h3-surveys"> {survey.startDate} - {survey.endDate}</h3>
                </div>


            ))}
     
            </div>
        }
        </>
        
    )
        
        
}
export default Surveys
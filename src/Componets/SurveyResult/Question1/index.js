import {React, useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { doc, getDoc, setDoc, collection, query,  getDocs, getFirestore } from "firebase/firestore";

import'./styles.css'

const Question1 = () => {
    
    let navigate = useNavigate()
    let params = useParams()
    let db = getFirestore()
    let survey = params.surveyName

    //const [answer1, setAnswer1] = useState()
    //const [answer2, setAnswer2] = useState()

    const [surveyInfo, setSurveyInfo] = useState()
    const [answer2List, setAnswer2List] = useState()

    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const [three, setThree] = useState(0)
    const [four, setFour] = useState(0)
    const [five, setFive] = useState(0)
    const [six, setSix] = useState(0)
    

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
    
    const fetchAnswers =  async () => {

        const q = query(collection(db, "surveys", survey, "results"));

        let surveys = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        surveys.push(doc.data())
        setAnswer2List(surveys)
        
    });
    
    let obj1 = surveys.filter(o => o.answer1 === 1)
    let obj2 = surveys.filter(o => o.answer1 === 2)
    let obj3 = surveys.filter(o => o.answer1 === 3)
    let obj4 = surveys.filter(o => o.answer1 === 4)
    let obj5 = surveys.filter(o => o.answer1 === 5)
    let obj6 = surveys.filter(o => o.answer1 === 6)
    
    
    setOne(obj1.length)
    setTwo(obj2.length)
    setThree(obj3.length)
    setFour(obj4.length)
    setFive(obj5.length)
    setSix(obj6.length)
    setAnswer2List(surveys)
    console.log(answer2List)

    }

    
    


    return(
        <>
        
        {surveyInfo && 
            <div className="question1-wrapper">
                 <button className="reveal-button-yellow" onClick={fetchAnswers}>Reveal answers</button>
                <h1 className="h1-question">{surveyInfo.question1}</h1>
                <div className="buttons-wrapper2">
                    <button     className='question2-button-white' >1</button>
                    <button    className='question2-button-white' >2</button>
                    <button    className='question2-button-white' >3</button>
                    <button   className='question2-button-white'>4</button>
                    <button     className='question2-button-white' >5</button>
                    <button   className='question2-button-white'>6</button>
                </div>
                <h2 className="h3-header">Amount of submissions</h2>
                <div className="buttons-wrapper">
                    <button className='question-button-yellow' >{one}</button>
                    <button    className='question-button-yellow'>{two}</button>
                    <button    className='question-button-yellow' >{three}</button>
                    <button    className='question-button-yellow'>{four}</button>
                    <button  className='question-button-yellow' >{five}</button>
                    <button   className='question-button-yellow'>{six}</button>
                </div>

               
                <h1 className="h1-question">{surveyInfo.question2}</h1>
                
                <div className="header-button-wrapper"> 
                {answer2List && 
                 <div className="question2-results-wrapper">
                {answer2List.map((answer2, index) => 
               
                     <textarea  value={answer2.answer2} className ="question-text"/>
    

                 )}
                 </div>
                 }
                </div>
                
               
            </div>
        }
        </>
    )
}
export default Question1
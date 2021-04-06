import  React, { useEffect, useState }  from "react";
import {Card} from "../organisms/Card"
import {fetchQuestions} from "../services/triviaService";

const counterStyle = {
  backgroundColor:"#1CA757",
  margin: "50px",
  padding: "30px",
  borderRadius: "15px"
};

const buttonStyle = {
  fontSize:"20px",
  margin: "20px"
};

const buttonNavigation = {
  display: "flex",
  justifyContent: "center",
};

export const Trivia = () => {
  const [question, updateQuestions] = useState();
  const [isLoading, updateLoading] = useState(true);
  const [questionNo, updateQuestionNo] = useState(0);
  const [score, updateScore] = useState(0);

  useEffect(() => {
    const receiveQuestions = async() => {
      updateQuestions(await fetchQuestions());
      updateLoading(false);
    };
    receiveQuestions();
  }, []);

  const handleCallback = (isCorrect) => {
    if(isCorrect){
      updateScore(score+1);
    }
  };

  const handleQuestionJump = (step) => {
    if(questionNo < 9 && step === "forth") {
      updateQuestionNo(questionNo + 1);
    }
    if(questionNo > 0 && step === "back") {
      updateQuestionNo(questionNo - 1);
    }
  };

  if(isLoading){
    return <p>Loading...</p>;
  }

  if(!isLoading){
    //console.log(question);
    return (
      <React.Fragment>
        <p style={counterStyle}>SCORE: {score}/10</p>
        <Card
          question = {question[questionNo]}
          answers = {question[questionNo].incorrect_answers}
          correctAnswer = {question[questionNo].correct_answer}
          isCorrect = {handleCallback}
        />
        <div style = {buttonNavigation}>
         <button 
            style={buttonStyle}
            onClick = {() => handleQuestionJump("back")}
          >Previous</button>

          <button 
           style={buttonStyle} 
           onClick = {() => handleQuestionJump("forth")}
         >Next</button>
        </div>
      </React.Fragment>
   );
  }
};

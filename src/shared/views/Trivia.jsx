import  React  from "react";
import {Card} from "../organisms/Card"

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

};

export const Trivia = () => {
  return (
    <React.Fragment>
      <p style={counterStyle}>COUNTER: 0/10</p>
      <Card/>
      <div>
        <button style={buttonStyle}>Previous</button>
        <button style={buttonStyle}>Answer</button>
        <button style={buttonStyle}>Next</button>
      </div>
    </React.Fragment>
  );
}
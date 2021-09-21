import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
// import { Button } from "react-bootstrap";
function App() {
    const questions = [
        {
            questionText: "Everything in React is _____________ ",
            answerOptions: [
                { answerText: "Module", isCorrect: false },
                { answerText: "Component", isCorrect: true },
                { answerText: "Package", isCorrect: false },
                { answerText: "className", isCorrect: false },
            ],
        },
        {
            questionText: "How many elements does a react component return?",
            answerOptions: [
                { answerText: "1 Element", isCorrect: false },
                { answerText: "Multiple Element", isCorrect: true },
                { answerText: "2 Element", isCorrect: false },
                { answerText: "None of the above", isCorrect: false },
            ],
        },
        {
            questionText:
                "How can you access the state of a component from inside of a member function?",
            answerOptions: [
                { answerText: "this.value", isCorrect: true },
                { answerText: " this.getState()", isCorrect: false },
                { answerText: "this.prototype.stateValue", isCorrect: false },
                { answerText: "this.state", isCorrect: false },
            ],
        },
        {
            questionText:
                "Which of the following API is a MUST for every ReactJS component?",
            answerOptions: [
                { answerText: " getInitialState", isCorrect: false },
                { answerText: "render", isCorrect: false },
                { answerText: "None of the above", isCorrect: false },
                { answerText: "renderComponent", isCorrect: true },
            ],
        },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className=" mt-5">
           {showScore ? (
             <center>
				<div className=" gif ">
				<p className="p-5 text-center">
          <p>Thank you </p>
          You scored {score} out of {questions.length}</p>	
				</div></center>
			) : (
				<>
            <div class="my-5 row">
                <h1 class="text-center text-white">Quiz</h1>
               

                <div className="col-3"></div>

                <div class="col-6 mt-5 text-center">
                    <div class="text-white  btn btn-dark" size="small">
                        <span className=" ">
                            Question {currentQuestion + 1}
                        </span>
                        /{questions.length}
                      
                        <p1 className="p-2 text-danger ">No negative mark </p1>
                    </div>
                   
                    
                    <div className='text-white mt-5'>
                    
                    
                    <h3  className="p-2 text-danger  mt-3 mb-5">Carefully choose the option you cannot go back </h3>
                      <h1>{questions[currentQuestion].questionText}</h1></div>
                      <div className="mt-5 mb-3 btn">
                       <b>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className="mb-3">{answerOption.answerText}</button>
						))}</b>
					</div>
       
                </div>
                <div className="col-3"></div>
            </div>
            </>
			)}
        </div>
    );
}

export default App;

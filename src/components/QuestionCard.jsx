import React, { useState } from "react";

const QuestionCard = ({
  question,
  selectedAnswers,
  setSelectedAnswers,
  changeQuestion,
  submitQuiz,
  totalQuestions,
}) => {
  const [selected, setSelected] = useState(selectedAnswers[question.id] ?? 0);

  const handleSelected = (answerNo) => {
    setSelected(answerNo === selected ? 0 : answerNo);
  };
  const setAnswer = (ans) => {
    setSelectedAnswers((curr) => ({ ...curr, [question.id]: selected }));
  };
  const handlePrev = () => {
    setAnswer(selected);
    changeQuestion(-1);
  };
  const handleNext = () => {
    setAnswer(selected);
    if (totalQuestions === question.id) submitQuiz();
    else changeQuestion(1);
  };

  return (
    <div className="question-card">
      <div className="question-container">
        <h2>question:{question.id}</h2>
        <h1>{question.question}</h1>
      </div>
      <div className="answers-container">
        <p>select one</p>
        <div className="buttons">
          <button
            disabled={question.id === 1}
            onClick={handlePrev}
            id="btn-prev"
          >
            previous
          </button>
          <button onClick={handleNext} id="btn-nxt">
            {totalQuestions === question.id ? "submit" : "next"}
          </button>
        </div>
        <div
          onClick={() => handleSelected(1)}
          id="a1"
          className={`answer ${selected === 1 && "selected"}`}
        >
          <span>{""}</span>
          <p>{question.answers[0]}</p>
        </div>
        <div
          onClick={() => handleSelected(2)}
          id="a2"
          className={`answer ${selected === 2 && "selected"}`}
        >
          <span>{""}</span>
          <p>{question.answers[1]}</p>
        </div>
        <div
          onClick={() => handleSelected(3)}
          id="a3"
          className={`answer ${selected === 3 && "selected"}`}
        >
          <span>{""}</span>
          <p>{question.answers[2]}</p>
        </div>
        <div
          onClick={() => handleSelected(4)}
          id="a4"
          className={`answer ${selected === 4 && "selected"}`}
        >
          <span>{""}</span>
          <p>{question.answers[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

const ParagraphCard = ({
  question,
  selectedAnswers,
  setSelectedAnswers,
  changePara,
  totalParas,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const changeQuestion = (by) => {
    if (by === 1 && currentQuestion + by <= question.questions.length - 1)
      setCurrentQuestion((cur) => cur + by);
    else if (by === -1 && currentQuestion === 0) {
      changePara(-1);
      setCurrentQuestion(0);
    } else {
      changePara(1);
      setCurrentQuestion(0);
    }
  };
  return (
    <div className="para-card">
      <div className="para-head">
        <h2>paragraph</h2>
        <p>{question.paragraph}</p>
      </div>
      <QuestionCard
        paraId={question.id}
        question={question.questions[currentQuestion]}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        changeQuestion={changeQuestion}
        totalQuestions={question.questions.length}
        totalParas={totalParas}
      />
    </div>
  );
};

export default ParagraphCard;

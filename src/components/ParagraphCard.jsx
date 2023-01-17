import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

const ParagraphCard = ({
  question: para,
  selectedAnswers,
  setSelectedAnswers,
  changePara,
  totalParas,
  handleSubmit,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isNoPara, setIsNoPara] = useState(false);

  const changeQuestion = (by) => {
    if (by === 1 && currentQuestion + by > para.questions.length - 1) {
      changePara(1);
      setCurrentQuestion(0);
    } else if (by === -1 && currentQuestion === 0) {
      changePara(-1);
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion((cur) => cur + by);
    }
  };

  useEffect(() => {
    setIsNoPara(para.paragraph.length === 0);
  }, [para]);

  return (
    <div className="para-card">
      {!isNoPara ? (
        <div className="para-head">
          <h2>paragraph</h2>
          <p>{para.paragraph}</p>
        </div>
      ) : null}
      <QuestionCard
        paraId={para.id}
        question={para.questions[currentQuestion]}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        changeQuestion={changeQuestion}
        totalQuestions={para.questions.length}
        totalParas={totalParas}
        isNoPara={isNoPara}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ParagraphCard;

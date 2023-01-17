import React, { useEffect, useState } from "react";

const QuestionCard = ({
  paraId,
  question,
  selectedAnswers,
  setSelectedAnswers,
  changeQuestion,
  submitQuiz,
  totalQuestions,
  totalParas,
  isNoPara,
  handleSubmit,
}) => {
  const [selected, setSelected] = useState();

  const handleSelected = (answerNo) => {
    setSelected(answerNo === selected ? 0 : answerNo);
  };
  const handlePrev = () => {
    setSelectedAnswers((curr) => ({
      ...curr,
      [`${paraId}_${question.id}`]: selected,
    }));
    changeQuestion(-1);
  };
  const handleNext = () => {
    setSelectedAnswers((curr) => ({
      ...curr,
      [`${paraId}_${question.id}`]: selected,
    }));
    if (totalParas === paraId && totalQuestions === question.id) handleSubmit();
    else changeQuestion(1);
  };

  useEffect(() => {
    setSelected(
      selectedAnswers[`${paraId}_${question.id}`] === undefined
        ? 0
        : selectedAnswers[`${paraId}_${question.id}`]
    );
    return () => {
      setSelected(0);
    };
  }, [question]);

  return (
    <div className="question-card">
      <div className="question-container">
        <h2>
          paragraph:
          <span>{paraId}</span> question:
          <span>{question.id}</span>
        </h2>
        <h1>{question.question}</h1>
      </div>
      <div className="answers-container">
        <p>select one answer</p>
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
        <div
          onClick={() => handleSelected(5)}
          id="a5"
          className={`answer ${selected === 5 && "selected"}`}
        >
          <span>{""}</span>
          <p>{question.answers[4]}</p>
        </div>
        <div className="buttons">
          <button
            disabled={paraId === 1 && question.id === 1}
            onClick={handlePrev}
            id="btn-prev"
          >
            previous {question.id === 1 && !isNoPara ? "paragraph" : "question"}
          </button>
          <button onClick={handleNext} id="btn-nxt">
            {totalParas === paraId && totalQuestions === question.id
              ? "submit"
              : "next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

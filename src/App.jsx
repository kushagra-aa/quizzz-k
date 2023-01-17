import { useState } from "react";
import "./App.css";
import NameCard from "./components/NameCard";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "what is not name of a bird",
      answers: ["cuku", "kingfisher", "pigeon", "parrot"],
    },
    {
      id: 2,
      question: "what is not name of a bird2",
      answers: ["cuku", "kingfisher", "pigeon", "parrot"],
    },
    {
      id: 3,
      question: "what is not name of a bird3",
      answers: ["cuku", "kingfisher", "pigeon", "parrot"],
    },
    {
      id: 4,
      question: "what is not name of a bird4",
      answers: ["cuku", "kingfisher", "pigeon", "parrot"],
    },
    {
      id: 5,
      question: "what is not name of a bird5",
      answers: ["cuku", "kingfisher", "pigeon", "parrot"],
    },
    {
      id: 6,
      question: "what is not name of a bird6",
      answers: ["cuku", "kingfisher", "pigeon", "parrot"],
    },
  ]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [name, setName] = useState("");

  const changeQuestion = (by) => {
    setCurrentQuestion((cur) => cur + by);
  };

  return (
    <main>
      {name.length ? (
        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          changeQuestion={changeQuestion}
          totalQuestions={questions.length}
        />
      ) : (
        <NameCard setName={setName} />
      )}
    </main>
  );
}

export default App;

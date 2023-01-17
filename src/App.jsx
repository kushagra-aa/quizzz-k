import { useEffect, useState } from "react";
import "./App.css";
import NameCard from "./components/NameCard";
import ParagraphCard from "./components/ParagraphCard";
import questions from "./questions.js";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentPara, setCurrentPara] = useState(0);
  const [name, setName] = useState("");

  const changePara = (by) => {
    if (currentPara + by < questions.length) setCurrentPara((cur) => cur + by);
  };

  useEffect(() => {}, [currentPara]);

  return (
    <main>
      {name.length ? (
        <ParagraphCard
          question={questions[currentPara]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          changePara={changePara}
          totalParas={questions.length}
        />
      ) : (
        <NameCard setName={setName} />
      )}
    </main>
  );
}

export default App;

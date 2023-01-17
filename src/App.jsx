import { useEffect, useState } from "react";
import NameCard from "./components/NameCard";
import ParagraphCard from "./components/ParagraphCard";
import questions from "./questions.js";
import { db } from "./firebase";
import { set, ref } from "firebase/database";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentPara, setCurrentPara] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const changePara = (by) => {
    if (currentPara + by < questions.length) setCurrentPara((cur) => cur + by);
  };

  const handleSubmit = () => {
    set(ref(db, `${name}/`), selectedAnswers)
      .then(() => setMessage("Response accepted!"))
      .catch((error) => setMessage("Something went wrong, Try Again!"));
    console.log("SUBMITTT!");
  };

  useEffect(() => {}, [currentPara]);

  return (
    <main>
      {message.length ? (
        <h1 className="message">{message}</h1>
      ) : name.length ? (
        <ParagraphCard
          question={questions[currentPara]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          changePara={changePara}
          totalParas={questions.length}
          handleSubmit={handleSubmit}
        />
      ) : (
        <NameCard setName={setName} />
      )}
    </main>
  );
}

export default App;

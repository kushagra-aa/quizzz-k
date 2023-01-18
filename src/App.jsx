import { useEffect, useMemo, useState } from "react";
import NameCard from "./components/NameCard";
import ParagraphCard from "./components/ParagraphCard";
import questions from "./questions.js";
import { db } from "./firebase";
import { set, ref } from "firebase/database";
import { TEST_TIME, TEST_TIME_STRING, TIMER_INTERVAL } from "./constants";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentPara, setCurrentPara] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState({});
  const [time, setTime] = useState(TEST_TIME)
  const [timeString, setTimeString] = useState(TEST_TIME_STRING);

  let interval = useMemo(() => {
    if (name.phone !== undefined)
      return setInterval(timer, TIMER_INTERVAL)
    return null
  }, [name]);


  function timer() {
    setTime(curr => curr - 1)
    setTimeString(cur => makeTimeString(cur))
  }


  function makeTimeString(currentString) {
    //min[0]:sec[1]
    let t;
    let min = ""
    let sec = ""
    t = [parseInt(currentString.split(":")[0]), parseInt(currentString.split(":")[1])]
    --t[1];
    if (t[1] <= 0) {
      --t[0];
      t[1] = 60;
    }
    if (t[1] < 10) sec = "0";
    if (t[0] < 10) min = "0";

    return `${min}${t[0]}:${sec}${t[1]}`;
  }

  const changePara = (by) => {
    if (currentPara + by < questions.length) setCurrentPara((cur) => cur + by);
  };

  const handleSubmit = () => {
    let dateObj = new Date()
    let date = dateObj.toLocaleDateString();
    let times = dateObj.toLocaleTimeString();
    set(ref(db, `${name.name}-${name.phone}/`), {
      name: name.name,
      phone: name.phone,
      email: name.email,
      college: name.college,
      "completed-in": TEST_TIME - time,
      date,
      time: times,
      answers: selectedAnswers,
    })
      .then(() => setMessage("Response accepted!"))
      .catch((error) => setMessage("Something went wrong, Try Again!"));
    console.log("SUBMITTT!");
  };


  useEffect(() => {
    if (time < 1) {
      clearInterval(interval)
      setMessage("Time's Up!!! Your Response Is Saved!")
      handleSubmit()
    }
  }, [time]);


  return (
    <main>
      {message.length ? (
        <>
          <h1 className="message">{message}</h1>
          <button onClick={() => location.reload()}>Restart</button>
        </>
      ) : name.phone !== undefined ? (
        <ParagraphCard
          question={questions[currentPara]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          changePara={changePara}
          totalParas={questions.length}
          handleSubmit={handleSubmit}
          timeString={timeString}
        />
      ) : (
        <NameCard setName={setName} />
      )}
    </main>
  );
}

export default App;

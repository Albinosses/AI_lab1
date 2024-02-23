import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import QuestionnairePage from './QuestionnairePage';
import ResultsPage from "./ResultsPage";

localStorage.clear()

function App() {
    const [answers, setAnswers] = useState(() => {
        const storedAnswers = localStorage.getItem('answers')
        return (storedAnswers && storedAnswers !== 'null') ? JSON.parse(storedAnswers) : {
            novice: {
                q1: null,
                q2: null,
                q3: null,
                q4: null
            },
            advanced_beginner: {
                q1: null,
                q2: null,
                q3: null
            },
            competent: {
                q1: null,
                q2: null,
                q3: null
            },
            proficient: {
                q1: null,
                q2: null,
                q3: null
            },
            expert: {
                q1: null,
                q2: null,
                q3: null
            }
        }
    });

    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers));
    }, [answers]);

    const handleChange = (level, question, value) => {
        setAnswers(prevState => ({
            ...prevState,
            [level]: {
                ...prevState[level],
                [question]: value
            }
        }));
    };

  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/questionnaire" element={<QuestionnairePage answers={answers} handleChange={handleChange} />} />
          <Route path="/results" element={<ResultsPage answers={answers} />} />
        </Routes>
      </Router>
  );
}

export default App;

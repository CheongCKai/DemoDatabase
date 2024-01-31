import React, { useState } from 'react';
import { firestore } from './firebase';

const TeacherForm = () => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleNumQuestionsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumQuestions(num);
    setQuestions(Array.from({ length: num }, (_, i) => ({ question: '', answers: ['', '', '', ''], correctAnswer: 0 })));
  };

  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, e) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctAnswer = parseInt(e.target.value, 10);
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    // Store data in Firebase
    firestore.collection('exams').add({
      questions,
    });

    // Optionally, reset the form or redirect to another page
  };

  return (
    <div>
      <label htmlFor="numQuestions">Number of Questions:</label>
      <input
        type="number"
        id="numQuestions"
        value={numQuestions}
        onChange={handleNumQuestionsChange}
      />

      {questions.map((q, index) => (
        <div key={index}>
          <label htmlFor={`question${index}`}>Question {index + 1}:</label>
          <input
            type="text"
            id={`question${index}`}
            value={q.question}
            onChange={(e) => handleQuestionChange(index, e)}
          />

          {q.answers.map((answer, answerIndex) => (
            <div key={answerIndex}>
              <label htmlFor={`answer${index}-${answerIndex}`}>Answer {answerIndex + 1}:</label>
              <input
                type="text"
                id={`answer${index}-${answerIndex}`}
                value={answer}
                onChange={(e) => handleAnswerChange(index, answerIndex, e)}
              />
            </div>
          ))}

          <label htmlFor={`correctAnswer${index}`}>Correct Answer:</label>
          <select
            id={`correctAnswer${index}`}
            value={q.correctAnswer}
            onChange={(e) => handleCorrectAnswerChange(index, e)}
          >
            {q.answers.map((_, i) => (
              <option key={i} value={i}>
                Option {i + 1}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TeacherForm;

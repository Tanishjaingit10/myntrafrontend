import React, { useState } from 'react';
import Footer from "../Footer"
import "./games.css"

function Games() {
    const questions = [
        {
            questionText: 'Where is the head office of Myntra ?',
            answerOptions: [
                { answerText: 'Kolkata', isCorrect: false },
                { answerText: 'Pune', isCorrect: false },
                { answerText: 'Bengaluru', isCorrect: true },
                { answerText: 'New Delhi', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is the current CEO of Myntra?',
            answerOptions: [
                { answerText: 'Kalyan Krishnamurthy', isCorrect: false },
                { answerText: 'Amar Nagaram', isCorrect: true },
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Mukesh Bansal', isCorrect: false },
            ],
        },
        {
            questionText: 'When was Myntra founded?',
            answerOptions: [
                { answerText: '2007', isCorrect: true },
                { answerText: '2004', isCorrect: false },
                { answerText: '2005', isCorrect: false },
                { answerText: '2006', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is the founder of Myntra?',
            answerOptions: [
                { answerText: 'Kalyan Krishnamurthy', isCorrect: false },
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Amar Nagaram', isCorrect: false },
                { answerText: 'Mukesh Bansal', isCorrect: true },
            ],
        },
        {
            questionText: 'Which of the following company acquired Myntra in 2014?',
            answerOptions: [
                { answerText: 'Facebook', isCorrect: false },
                { answerText: 'Snapdeal', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Flipkart', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div>
            <div style={{ marginTop: '120px' }}>
                <h2 className="text-center mb-5">Daily Quiz</h2>
                <div className="app w-1/2 flex h-80 rounded-2xl p-8 overflow-hidden shadow-lg mb-5" style={{ margin: 'auto' }}>
                    {showScore ? (
                        <div className='score-section flex flex-col w-full items-center justify-center'>
                            <h2 className="mb-8 mt-2">CONGRATULATIONS!</h2>
                            <p>You scored {score} out of {questions.length}</p>
                            <p>Coins earned: {4*score}</p>
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button className="rounded-lg p-2" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Games
import React, { useState } from 'react';
import Footer from "../Footer"

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
            <div className="mt-32 flex items-center flex-col">
                <div className="text-3xl font-semibold text-center mb-5">Daily Quiz</div>
                <div className="p-6 text-white w-11/12 sm:w-2/3 lg:w-1/2 flex rounded-2xl overflow-hidden shadow-lg mb-5" style={{ background:"#414e7c" }}>
                    {showScore ? (
                        <div className='score-section flex flex-col w-full items-center justify-center'>
                            <div className="mb-8 text-3xl font-semibold mt-2">CONGRATULATIONS!</div>
                            <p className="text-xl">You scored {score} out of {questions.length}</p>
                            <p className="text-xl">Coins earned: {4*score}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row w-full items-center justify-center">
                            <div className='h-full p-2 my-2 w-full'>
                                <span className="text-3xl">Question {currentQuestion + 1}</span>/{questions.length}
                                <div className='my-4'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='grid grid-cols-1 mb-2 w-full'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button className="rounded-lg p-2 m-2" style={{backgroundColor:"#252d4a"}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Games
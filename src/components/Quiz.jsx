import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';
import click from '../assets/click.wav';
import victory from '../assets/victory.wav';
import start from '../assets/start.mp3';

export function Quiz() {
  // handle the quiz, question, result and loading animation states

  const [quizState, setQuizState] = useState('startButton');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // handle start button

  const startButton = (answer) => {
    if (answer === 'firstQuestion')
      setTimeout(() => {
        setQuizState('firstQuestion');
      }, 800);
    play();
    setTimeout(() => {
      playStart();
    }, 800);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  // handle displaying the result text

  const handleAnswerOptionClick = (resultText) => {
    if (resultText) {
      setIsLoading(true);
      setResult(resultText);
      setShowResult(true);
      play();
      setTimeout(() => {
        playResult();
      }, 2000);
    }

    // handle quiz progression

    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < parametricCategorical.length) {
      setCurrentQuestion(nextQuestion);
    } else if (nextQuestion < parametricQuantitative.length) {
      setCurrentQuestion(nextQuestion);
    } else if (nextQuestion < nonParametricCategorical.length) {
      setCurrentQuestion(nextQuestion);
    } else if (nextQuestion < nonParametricQuantitative.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  // handle the user's answer to choosing the overall data type

  function handleFirstQuestion(answer) {
    if (answer === 'parametric') {
      setTimeout(() => {
        setQuizState('parametric');
      }, 800);
      play();
    } else {
      setTimeout(() => {
        setQuizState('nonparametric');
      }, 800);
      play();
    }
  }

  // create sound effects

  function play() {
    new Audio(click).play();
  }
  function playResult() {
    new Audio(victory).play();
  }
  function playStart() {
    new Audio(start).play();
  }

  // create the question/answer bank

  const parametricCategorical = [
    {
      questionText: 'My dependent variable is?',
      answerOptions: [
        {
          answerText: 'Categorical',
          resultText: 'Consider using a nonparametric test.',
        },
        { answerText: 'Quantitative' },
      ],
    },
    {
      questionText: 'How many groups are being compared?',
      answerOptions: [
        {
          answerText: 'Two',
          resultText: 'T-Test',
        },
        { answerText: 'More than two' },
      ],
    },
    {
      questionText: 'How many dependent variables?',
      answerOptions: [
        {
          answerText: 'One',
        },
        { answerText: 'More than one', resultText: 'MANOVA' },
      ],
    },
    {
      questionText: 'How many independent variables?',
      answerOptions: [
        {
          answerText: 'One',
          resultText: 'One-way ANOVA',
        },
        { answerText: 'More than one', resultText: 'Two-way ANOVA' },
      ],
    },
  ];

  const parametricQuantitative = [
    {
      questionText: 'My dependent variable is?',
      answerOptions: [
        {
          answerText: 'Categorical',
          resultText: 'Logisitic Regression',
        },
        { answerText: 'Quantitative' },
      ],
    },
    {
      questionText: 'How many independent variables?',
      answerOptions: [
        {
          answerText: 'One',
          resultText: 'Simple Linear Regression',
        },
        {
          answerText: 'More than one',
          resultText: 'Multiple Linear Regression',
        },
      ],
    },
  ];

  const nonParametricCategorical = [
    {
      questionText: 'My dependent variable is?',
      answerOptions: [
        {
          answerText: 'Categorical',
          resultText: 'Chi Squared Test of independence',
        },
        { answerText: 'Quantitative' },
      ],
    },
    {
      questionText: 'Only 1 variable?',
      answerOptions: [
        {
          answerText: 'Yes',
          resultText: 'Sign Test',
        },
        { answerText: 'No' },
      ],
    },
    {
      questionText: 'How many groups are being compared?',
      answerOptions: [
        {
          answerText: 'Two',
        },
        { answerText: 'More than two' },
      ],
    },
    {
      questionText: 'Are the groups from the same or different population?',
      answerOptions: [
        {
          answerText: 'Same',
          resultText: 'Wilcoxen Signed Rank Test',
        },
        { answerText: 'Different', resultText: 'Wilcoxen Rank Sum Test' },
      ],
    },
    {
      questionText: 'Dependent variables: two or more?',
      answerOptions: [
        {
          answerText: 'Yes',
          resultText: 'ANOSIM',
        },
        { answerText: 'No', resultText: 'Kruskal-Wallis H' },
      ],
    },
  ];

  const nonParametricQuantitative = [
    {
      questionText: 'My dependent variable is?',
      answerOptions: [
        {
          answerText: 'Categorical',
          resultText: "Spearman's Rho: Categorical Purposes",
        },
        {
          answerText: 'Quantitative',
          resultText: "Spearman's Rho: Continuous Purposes",
        },
      ],
    },
  ];

  // handle the user's answers

  function handleBlockQuestion(answer) {
    if (answer === 'parametric-categorical') {
      setTimeout(() => {
        setQuizState('parametric-categorical');
      }, 800);
      play();
    } else if (answer === 'parametric-quantitative') {
      setTimeout(() => {
        setQuizState('parametric-quantitative');
      }, 800);
      play();
    } else if (answer === 'nonparametric-categorical') {
      setTimeout(() => {
        setQuizState('nonparametric-categorical');
      }, 800);
      play();
    } else if (answer === 'nonparametric-quantitative') {
      setTimeout(() => {
        setQuizState('nonparametric-quantitative');
      }, 800);
      play();
    }
  }

  // handle the restart button

  const restartQuiz = () => {
    setTimeout(() => {
      setQuizState('startButton');
      setCurrentQuestion(0);
      setShowResult(false);
    }, 800);
    play();
  };

  // Return the quiz UI based on the current quiz state

  if (showResult === true) {
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="w-full h-screen bg-[#0a192f]">
              <div className="flex flex-col justify-center items-center w-[100%] h-full">
                <div className="w-70 h-80">
                  <div className="result-box">
                    <div className="underline text-sm result-title">Result</div>
                    <div className="result">
                      <p className="text-lg font-mono text-pink-500">
                        {result}
                      </p>
                    </div>
                  </div>
                  <button className="btn-result" onClick={() => restartQuiz()}>
                    Restart Selector
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  } else if (quizState === 'startButton') {
    return (
      <div
        name="selector"
        className="w-full h-screen bg-[#0a192f] text-teal-300"
      >
        <div className="flex flex-col justify-center items-center w-[100%] h-full">
          <h1 className="flex justify-center items-center w-[100%] top-0 title text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-blue-400 md:text-4xl sm:text-2xl">
            Stat Selector
          </h1>
          <div className="mt-9">
            <button
              className="btn"
              onClick={() => startButton('firstQuestion')}
            >
              Start Selector
            </button>
          </div>
        </div>
      </div>
    );
  } else if (quizState === 'firstQuestion') {
    return (
      <div
        name="selector"
        className="w-full h-screen bg-[#0a192f] text-teal-300"
      >
        <div className="flex flex-col justify-center items-center w-[100%] h-full">
          <div className="quiz-box">
            <div className="underline text-sm result-title">Question</div>
            <div className="question font-mono">
              <p className="text-pink-500">My data type is?</p>
            </div>
            <button
              className="btn"
              onClick={() => handleFirstQuestion('parametric')}
            >
              Parametric
            </button>
            <button
              className="btn"
              onClick={() => handleFirstQuestion('nonparametric')}
            >
              Nonparametric
            </button>
          </div>
        </div>
      </div>
    );
  } else if (quizState === 'parametric') {
    return (
      <div className="w-full h-screen bg-[#0a192f] text-teal-300">
        <div className="flex flex-col justify-center items-center w-[100%] h-full">
          <div className="quiz-box">
            <div className="underline text-sm result-title">Question</div>
            <div className="question font-mono">
              <p className="text-pink-500">My indenpedent variable is?</p>
            </div>
            <button
              className="btn"
              onClick={() => handleBlockQuestion('parametric-categorical')}
            >
              Categorical
            </button>
            <button
              className="btn"
              onClick={() => handleBlockQuestion('parametric-quantitative')}
            >
              Quantitative
            </button>
          </div>
        </div>
      </div>
    );
  } else if (quizState === 'nonparametric') {
    return (
      <div className="w-full h-screen bg-[#0a192f] text-teal-300">
        <div className="flex flex-col justify-center items-center w-[100%] h-full">
          <div className="quiz-box">
            <div className="underline text-sm result-title">Question</div>
            <div className="question font-mono">
              <p className="text-pink-500">My indenpedent variable is?</p>
            </div>
            <button
              className="btn"
              onClick={() => handleBlockQuestion('nonparametric-categorical')}
            >
              Categorical
            </button>
            <button
              className="btn"
              onClick={() => handleBlockQuestion('nonparametric-quantitative')}
            >
              Quantitative
            </button>
          </div>
        </div>
      </div>
    );
  } else if (quizState === 'parametric-categorical') {
    return (
      <>
        <div className="w-full h-screen bg-[#0a192f] text-teal-300">
          <div className="flex flex-col justify-center items-center w-[100%] h-full">
            <div className="quiz-box">
              <div className="underline text-sm result-title">Question</div>
              <div className="question font-mono">
                <p className="text-pink-500">
                  {parametricCategorical[currentQuestion].questionText}
                </p>
              </div>

              <div>
                {parametricCategorical[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      className="btn"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.resultText)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (quizState === 'parametric-quantitative') {
    return (
      <>
        <div className="w-full h-screen bg-[#0a192f] text-teal-300">
          <div className="flex flex-col justify-center items-center w-[100%] h-full">
            <div className="quiz-box">
              <div className="underline text-sm result-title">Question</div>
              <div className="question font-mono">
                <p className="text-pink-500">
                  {parametricQuantitative[currentQuestion].questionText}
                </p>
              </div>
              <div>
                {parametricQuantitative[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      className="btn"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.resultText)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (quizState === 'nonparametric-categorical') {
    return (
      <>
        <div className="w-full h-screen bg-[#0a192f] text-teal-300">
          <div className="flex flex-col justify-center items-center w-[100%] h-full">
            <div className="quiz-box">
              <div className="underline text-sm result-title">Question</div>
              <div className="question font-mono">
                <p className="text-pink-500">
                  {nonParametricCategorical[currentQuestion].questionText}
                </p>
              </div>
              <div>
                {nonParametricCategorical[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      className="btn"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.resultText)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (quizState === 'nonparametric-quantitative') {
    return (
      <>
        <div className="w-full h-screen bg-[#0a192f] text-teal-300">
          <div className="flex flex-col justify-center items-center w-[100%] h-full">
            <div className="quiz-box">
              <div className="underline text-sm result-title">Question</div>
              <div className="question font-mono">
                <p className="text-pink-500">
                  {nonParametricQuantitative[currentQuestion].questionText}
                </p>
              </div>
              <div>
                {nonParametricQuantitative[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      className="btn"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.resultText)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import { useMemo, useState } from "react";
import QuizCard from "../../components/quiz/QuizCard";
import QuizResult from "../../components/quiz/QuizResult";
import quizQuestions from "../../data/quizQuestions";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestion?.id] || "";
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const correctAnswers = useMemo(
    () =>
      quizQuestions.filter(
        (question) => selectedAnswers[question.id] === question.answer
      ).length,
    [selectedAnswers]
  );

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers((answers) => ({
      ...answers,
      [currentQuestion.id]: answer,
    }));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((index) => Math.max(index - 1, 0));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  if (!quizQuestions.length) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-slate-300">
        No quiz questions available.
      </div>
    );
  }

  if (showResult) {
    return (
      <QuizResult
        totalQuestions={quizQuestions.length}
        correctAnswers={correctAnswers}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-cyan-400">Quiz Practice</p>
        <h1 className="mt-2 text-3xl font-bold text-white">React Quiz</h1>
      </div>

      <QuizCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
        onSelectAnswer={handleSelectAnswer}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}

export default Quiz;

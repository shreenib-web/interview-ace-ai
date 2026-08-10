import { useMemo, useState } from "react";
import QuizCard from "../../components/quiz/QuizCard";
import QuizResult from "../../components/quiz/QuizResult";
import quizQuestions, { quizSubjects } from "../../data/quizQuestions";

const emptyQuestions = [];

function Quiz() {
  const [selectedSubject, setSelectedSubject] = useState(quizSubjects[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const activeQuestions = quizQuestions[selectedSubject] || emptyQuestions;

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestion?.id] || "";
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;

  const correctAnswers = useMemo(
    () =>
      activeQuestions.filter(
        (question) => selectedAnswers[question.id] === question.answer
      ).length,
    [activeQuestions, selectedAnswers]
  );

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

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

  if (!activeQuestions.length) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-slate-300">
        No quiz questions available.
      </div>
    );
  }

  if (showResult) {
    return (
      <QuizResult
        totalQuestions={activeQuestions.length}
        correctAnswers={correctAnswers}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-cyan-400">Quiz Practice</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-white">
            {selectedSubject} Quiz
          </h1>

          <select
            value={selectedSubject}
            onChange={(event) => handleSubjectChange(event.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400 sm:w-48"
          >
            {quizSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <QuizCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={activeQuestions.length}
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

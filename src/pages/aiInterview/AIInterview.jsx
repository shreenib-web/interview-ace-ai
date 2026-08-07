import { useMemo, useState } from "react";
import InterviewFeedback from "./InterviewFeedback";
import InterviewQuestion from "./InterviewQuestion";
import InterviewResult from "./InterviewResult";
import InterviewSetup from "./InterviewSetup";
import interviewQuestions from "./interviewQuestions";

const initialSetup = {
  technology: "React",
  difficulty: "Easy",
  interviewType: "Technical",
};

function normalizeFeedback(feedback) {
  return {
    score: Number(feedback?.score ?? 0),
    correctness: feedback?.correctness || "Needs review",
    strengths: feedback?.strengths || [],
    weaknesses: feedback?.weaknesses || [],
    missingConcepts: feedback?.missingConcepts || [],
    improvementSuggestions: feedback?.improvementSuggestions || [],
    idealAnswer: feedback?.idealAnswer || "No suggested answer was provided.",
    followUpQuestion:
      feedback?.followUpQuestion || "Can you expand on your answer?",
  };
}

function AIInterview() {
  const [setup, setSetup] = useState(initialSetup);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [responses, setResponses] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const questions = useMemo(
    () => interviewQuestions[setup.technology] || interviewQuestions.React,
    [setup.technology]
  );
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const updateSetup = (field, value) => {
    setSetup((currentSetup) => ({
      ...currentSetup,
      [field]: value,
    }));
  };

  const startInterview = () => {
    setSessionStarted(true);
    setCurrentQuestionIndex(0);
    setAnswer("");
    setFeedback(null);
    setResponses([]);
    setError("");
    setShowResult(false);
  };

  const chooseAnotherTechnology = () => {
    setSessionStarted(false);
    setCurrentQuestionIndex(0);
    setAnswer("");
    setFeedback(null);
    setResponses([]);
    setError("");
    setShowResult(false);
  };

  const submitAnswer = async (event) => {
    event.preventDefault();

    if (!answer.trim()) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/ai/interview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...setup,
          question: currentQuestion,
          userAnswer: answer.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("AI request failed");
      }

      const data = await response.json();
      const normalizedFeedback = normalizeFeedback(data.feedback);

      setFeedback(normalizedFeedback);
      setResponses((currentResponses) => [
        ...currentResponses,
        {
          question: currentQuestion,
          userAnswer: answer.trim(),
          feedback: normalizedFeedback,
        },
      ]);
    } catch {
      setError(
        "We could not get AI feedback right now. Please check the backend setup and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToNextQuestion = () => {
    if (isLastQuestion) {
      setShowResult(true);
      setFeedback(null);
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
    setAnswer("");
    setFeedback(null);
    setError("");
  };

  if (!sessionStarted) {
    return (
      <InterviewSetup
        setup={setup}
        onChange={updateSetup}
        onStart={startInterview}
      />
    );
  }

  if (showResult) {
    return (
      <InterviewResult
        responses={responses}
        onChooseAnother={chooseAnotherTechnology}
        onTryAgain={startInterview}
      />
    );
  }

  if (feedback) {
    return (
      <InterviewFeedback
        feedback={feedback}
        isLastQuestion={isLastQuestion}
        onNext={goToNextQuestion}
      />
    );
  }

  return (
    <InterviewQuestion
      answer={answer}
      error={error}
      isSubmitting={isSubmitting}
      question={currentQuestion}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={questions.length}
      onAnswerChange={setAnswer}
      onSubmit={submitAnswer}
    />
  );
}

export default AIInterview;

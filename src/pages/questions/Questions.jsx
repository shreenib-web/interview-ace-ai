import questions from "../../data/questions";
import QuestionCard from "../../components/questions/QuestionCard";

function Questions() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-8">
        Interview Questions
      </h1>

      <div className="grid gap-6">
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
          />
        ))}
      </div>

    </div>
  );
}

export default Questions;
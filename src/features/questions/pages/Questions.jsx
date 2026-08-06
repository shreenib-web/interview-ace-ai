import { useMemo, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import QuestionFilter from "../components/QuestionFilter";
import QuestionSearch from "../components/QuestionSearch";
import useBookmarks from "../../../hooks/useBookmarks";
import {
  cssQuestions,
  htmlQuestions,
  javascriptQuestions,
  nodeQuestions,
  reactQuestions,
  sqlQuestions,
} from "../../../data";

const allQuestions = [
  ...reactQuestions,
  ...javascriptQuestions,
  ...nodeQuestions,
  ...htmlQuestions,
  ...cssQuestions,
  ...sqlQuestions,
];

function Questions() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const { bookmarks, toggleBookmark } = useBookmarks();

  const filteredQuestions = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return allQuestions.filter((question) => {
      const matchesSearch =
        question.title.toLowerCase().includes(searchTerm) ||
        question.answer.toLowerCase().includes(searchTerm);
      const matchesCategory =
        category === "All" || question.category === category;
      const matchesDifficulty =
        difficulty === "All" || question.difficulty === difficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [category, difficulty, search]);

  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-8">
        Interview Questions
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <QuestionSearch search={search} setSearch={setSearch} />
        <QuestionFilter
          category={category}
          setCategory={setCategory}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>

      <div className="grid gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <p className="text-slate-400 mt-8">
          No questions found. Try a different search or filter.
        </p>
      )}

    </div>
  );
}

export default Questions;

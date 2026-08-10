import QuestionCard from "../components/QuestionCard";
import useBookmarks from "../../../hooks/useBookmarks";
import { allQuestions } from "../../../data";

function Bookmarks() {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const bookmarkedQuestions = allQuestions.filter((question) =>
    bookmarks.includes(question.id)
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">
        Bookmarked Questions
      </h1>

      <div className="grid gap-6">
        {bookmarkedQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        ))}
      </div>

      {bookmarkedQuestions.length === 0 && (
        <p className="text-slate-400 mt-8">
          No bookmarked questions yet. Save questions from the Interview Questions page.
        </p>
      )}
    </div>
  );
}

export default Bookmarks;

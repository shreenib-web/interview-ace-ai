import reactQuiz from "./reactQuiz.js";
import javascriptQuiz from "./javascriptQuiz.js";
import htmlQuiz from "./htmlQuiz.js";
import cssQuiz from "./cssQuiz.js";
import nodeQuiz from "./nodeQuiz.js";
import sqlQuiz from "./sqlQuiz.js";

const quizQuestions = {
  React: reactQuiz,
  JavaScript: javascriptQuiz,
  HTML: htmlQuiz,
  CSS: cssQuiz,
  "Node.js": nodeQuiz,
  SQL: sqlQuiz,
};

export const quizSubjects = Object.keys(quizQuestions);

export default quizQuestions;

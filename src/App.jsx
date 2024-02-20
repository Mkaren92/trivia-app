/* using HashRouter instead of default BrowerRouter to match Github pages deployment requirements.
GitHub Pages doesn't support routers that use the HTML5 pushState history API under the hood, 
such as React Router with browserHistory. */ 
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useQuiz } from "./store/quiz-context.jsx";
import HomePage from "./pages/Home";
import QuizPage from "./pages/Quiz";
import ResultsPage from "./pages/Results";

export default function App() {
  const { category } = useQuiz();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/quiz"
          element={category ? <QuizPage /> : <Navigate to="/" />}
        />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

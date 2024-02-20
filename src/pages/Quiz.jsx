import { useQuery } from "react-query";
import { useQuiz } from "../store/quiz-context.jsx";
import { fetchQuestions } from "../api/questions";
import Question from "../components/quiz/Question";
import Complete from "../components/quiz/Complete";
import Loading from "../components/ui/Loading";

export default function Quiz() {
  const { activeQuestionIndex, category } = useQuiz();
  const { isLoading, data } = useQuery(
    ["questions", category.value, 10],
    fetchQuestions,
    {
      cacheTime: 5000,
    }
  );

  if (isLoading) return <Loading />;
  if (data && activeQuestionIndex === data.results.length) return <Complete />;
  return <>{data && <Question questions={data.results} />}</>;
}

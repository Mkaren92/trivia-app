import useLocalStorage from "../hooks/useStorage";
import Title from "../components/ui/Title";
import ResultQuiz from "../components/results/ResultQuiz";
import HomeIcon from "../components/icons/HomeIcon";
import FloatingButton from "../components/ui/FloatingButton.jsx";
import Paragraph from "../components/ui/Paragraph.jsx";

export default function Results() {
  const [quizzes] = useLocalStorage("quizzes", []);

  return (
    <div className="max-w-5xl mx-auto py-32 px-4">
      <Title classes="mb-24 text-center">Results</Title>
      {!quizzes.length ? (
        <Paragraph classes="text-center">No quizzes passed yet</Paragraph>
      ) : (
        quizzes.map((quiz) => <ResultQuiz quiz={quiz} key={quiz.id} />)
      )}
      <FloatingButton path="/" icon={HomeIcon} />
    </div>
  );
}

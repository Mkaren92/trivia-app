import { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useQuiz } from "../../store/quiz-context.jsx";
import { getTruthyCount } from "../../utility/helpers.js";
import useLocalStorage from "../../hooks/useStorage";
import Paragraph from "../ui/Paragraph.jsx";
import Button from "../ui/Button.jsx";
import Title from "../ui/Title.jsx";
import Container from "../ui/Container";

export default function Complete() {
  const { answers, category, resetState } = useQuiz();
  const [, setQuizzes] = useLocalStorage("quizzes", []);

  useEffect(() => {
    const quizzeObject = {
      id: uuidv4(),
      categoryName: category.name,
      answers,
    };

    setQuizzes((prevQuizzes) => [quizzeObject, ...prevQuizzes]);
    return () => resetState();
  }, [answers, category.name, setQuizzes, resetState]);

  return (
    <Container>
      <Title classes="mb-36">Thank you</Title>
      <div>
        <Paragraph classes="mb-20">
          Your score: {getTruthyCount(answers, "isCorrect")} / {answers.length}
        </Paragraph>

        <Button>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </Container>
  );
}

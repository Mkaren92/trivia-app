import { useCallback } from "react";
import { useQuiz } from "../../store/quiz-context.jsx";
import { shuffleArray } from "../../utility/helpers";
import Container from "../ui/Container";
import QuestionHeader from "./QuestionHeader";
import Answer from "./Answer";

export default function Question({ questions }) {
  const { activeQuestionIndex, addAnswer } = useQuiz();
  const activeQuestion = questions[activeQuestionIndex];
  const activeQuestionAnswers = [
    ...activeQuestion.incorrect_answers,
    activeQuestion.correct_answer,
  ];

  const handelSelectAnswer = useCallback(
    (answer) => {
      const answerResule = {
        answer,
        correctAnswer: activeQuestion.correct_answer,
        question: activeQuestion.question,
        isCorrect: answer === activeQuestion.correct_answer,
      };
      addAnswer(answerResule);
    },
    [activeQuestion, addAnswer]
  );

  return (
    <Container>
      <QuestionHeader question={activeQuestion} activeIndex={activeQuestionIndex} />
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-${activeQuestionAnswers.length} xl:auto-cols-auto gap-6 mt-20`}
      >
        {shuffleArray(activeQuestionAnswers).map((answer) => (
          <Answer
            key={answer}
            answer={answer}
            onSelectAnswer={handelSelectAnswer}
          />
        ))}
      </div>
    </Container>
  );
}

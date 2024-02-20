import { decodeHtmlEntities } from "../../utility/helpers";

export default function ResultQuestion({ question }) {
  return (
    <div className="mb-8">
      <p
        className={`text-lg font-bold ${
          question.isCorrect ? "text-primary" : "text-red-700"
        }`}
      >
        {decodeHtmlEntities(question.question)}
      </p>

      <div className="mt-2">
        <p className="mb-2">
          <b>Answer:</b> {decodeHtmlEntities(question.correctAnswer)}
        </p>
        {!question.isCorrect && (
          <p>
            <b>Your answer:</b> {decodeHtmlEntities(question.answer)}
          </p>
        )}
      </div>
    </div>
  );
}

import { decodeHtmlEntities, formatNumber } from "../../utility/helpers";
import Paragraph from "../ui/Paragraph.jsx";
import Title from "../ui/Title.jsx";
import Badge from "../ui/Badge.jsx";

export default function QuestionHeader({ question, activeIndex }) {
  return (
    <>
      <div className="mb-20">
        <Title classes="mb-6">Questions {formatNumber(activeIndex + 1)}</Title>
        <Badge variant={question.difficulty}>{question.difficulty}</Badge>
      </div>
      <Paragraph>{decodeHtmlEntities(question.question)}</Paragraph>
    </>
  );
}

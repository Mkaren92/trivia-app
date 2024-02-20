import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../store/quiz-context.jsx";
import { fetchCategories } from "../../api/categories";
import Paragraph from "../ui/Paragraph.jsx";
import Button from "../ui/Button.jsx";
import Title from "../ui/Title.jsx";
import CustomListBox from "../ui/CustomListBox";

export default function Categories() {
  const { category, selectCategory } = useQuiz();
  const navigate = useNavigate();

  const { data } = useQuery(["categories"], fetchCategories, {
    cacheTime: 360000,
  });

  return (
    <>
      <Title classes="mb-36">Trivia App</Title>

      <div className="flex flex-col items-center mb-24">
        <Paragraph classes="mb-8">Pick a Category</Paragraph>
        {data && (
          <CustomListBox
            items={data.trivia_categories}
            value={category}
            setValue={selectCategory}
          />
        )}
      </div>

      <div>
        <Button isDisabled={!category} onClick={() => navigate("/quiz")}>
          Start
        </Button>
      </div>
    </>
  );
}

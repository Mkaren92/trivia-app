import FloatingButton from "../components/ui/FloatingButton.jsx";
import Categories from "../components/home/Categories";
import Container from "../components/ui/Container";
import CupIcon from "../components/icons/CupIcon";

export default function Home() {
  return (
    <Container>
      <Categories />
      <FloatingButton path="/results" icon={CupIcon} />
    </Container>
  );
}

import Question from "../components/question/question.component";
import { DATA } from "../data";

export default function Page({ params }: { params: { id: string } }) {
  const category_id = params.id;
  const item = DATA.filter((item) => item.category === "particles").find(
    (item) => {
      return item.category_id === Number(category_id);
    }
  );
  if (item && item.level === "beginner") {
    return <div>{<Question params={item} />}</div>;
  } else {
    // レベルで設問を分ける
  }
}

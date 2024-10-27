import QuestionBeginner from "../components/question-beginner/question-beginner.component";
import { DATA } from "../data";

export default function Page({ params }: { params: { category_id: string } }) {
  const category_id = params.category_id;
  const item = DATA.filter((item) => item.category === "particles").find(
    (item) => {
      return item.category_id === Number(category_id);
    }
  );
  if (item && item.level === "beginner") {
    return <div>{<QuestionBeginner params={item} />}</div>;
  } else {
    // レベルで設問を分ける
  }
}

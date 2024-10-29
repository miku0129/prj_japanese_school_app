import QuestionBeginner from "../components/question-beginner/question-beginner.component";
import QuestionIntermediate from "../components/question-intermediate/question-intermediate.component";
import { DATA } from "../data";

export default function Page({ params }: { params: { category_id: string } }) {
  const category_id = params.category_id;
  const particle_items = DATA.filter((item) => item.category === "particles");

  const particle_beginner_item = particle_items
    .filter((item) => item.level === "beginner")
    .find((item) => {
      return item.category_id === Number(category_id);
    });

  const particle_intermediate_item = particle_items
    .filter((item) => item.level === "intermediate")
    .find((item) => {
      return item.category_id === Number(category_id);
    });

  const particle_advanced_item = particle_items
    .filter((item) => item.level === "advanced")
    .find((item) => {
      return item.category_id === Number(category_id);
    });

  if (
    particle_beginner_item?.phrase_front &&
    particle_beginner_item?.level === "beginner"
  ) {
    return <div>{<QuestionBeginner params={particle_beginner_item} />}</div>;
  } else if (
    particle_intermediate_item?.answer &&
    particle_intermediate_item?.character &&
    particle_intermediate_item?.level === "intermediate"
  ) {
    return (
      <div>{<QuestionIntermediate params={particle_intermediate_item} />}</div>
    );
  } else {
    return <div>{particle_advanced_item?.level}</div>;
  }
}

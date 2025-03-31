// import prisma from "../../../../../prisma";
import { romajiQuestions } from "../romaji-questions";
import Question from "../components/question";

export default async function Page({
  params,
}: {
  params: { category_id: string };
}) {

  const category_id = params.category_id;
  const question = romajiQuestions.filter(question => String(question.categoryId) === category_id)[0]

//   const getQuestion = async () => {
//     const questions = await prisma.question.findMany({
//       include: {
//         additionalQuestion: true,
//         choices: {
//           include: {
//             choice: true,
//           },
//         },
//       },
//       where: {
//         category: "particles",
//       },
//     });
//     const question = questions.find(
//       (question: Question) => question.categoryId === Number(category_id)
//     );
//     return {
//       props: { question },
//     };
//   };
//   const { props } = await getQuestion();
//   const question = props.question;

return <Question params={question}/>
}

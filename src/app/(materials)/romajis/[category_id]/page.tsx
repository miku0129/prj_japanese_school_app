import prisma from "../../../../../prisma";
import Question from "../components/question";

export default async function Page({
  params,
}: {
  params: { category_id: string };
}) {
  const category_id = params.category_id;

  const getQuestion = async () => {
    const questions = await prisma.romajisQuestion.findMany({
      include: {
        options: {
          include: {
            option: true,
          },
        },
      },
      where: {
        category: "romajis",
      },
    });
    const question = questions.find(
      (question: RomajisQuestion) => question.categoryId === Number(category_id)
    );
    return {
      props: { question },
    };
  };
  const { props } = await getQuestion();
  const question = props.question;

  if (question) return <Question params={question} />;
}

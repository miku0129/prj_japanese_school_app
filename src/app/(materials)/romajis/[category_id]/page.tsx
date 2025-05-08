import prisma from "../../../../../prisma";
import Question from "../components/question";

type Params = Promise<{ category_id: string }>

export default async function Page({
  params,
}: {
  params: Params;
}) {
  const { category_id } = await params;

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

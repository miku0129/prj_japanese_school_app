import prisma from "../../../../../prisma";
import Question from "../components/question";

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

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
      (question: RomajisQuestion) => 
       question.id === Number(id)
    );
    return {
      props: { question },
    };
  };
  const { props } = await getQuestion();
  const question = props.question;

  if (question) return <Question params={question} />;
}

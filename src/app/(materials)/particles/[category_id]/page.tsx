import prisma from "../../../../../prisma";
import QuestionBeginner from "../components/question-beginner/question-beginner.component";
import QuestionIntermediate from "../components/question-intermediate/question-intermediate.component";
import QuestionAdvanced from "../components/question-advanced/question-advanced.component";

type Params = Promise<{ category_id: string }>

export default async function Page({
  params,
}: {
  params: Params;
}) {
  const { category_id } = await params;

  const getQuestion = async () => {
    const questions = await prisma.particlesQuestion.findMany({
      include: {
        additionalQuestion: true,
        options: {
          include: {
            option: true,
          },
        },
      },
      where: {
        category: "particles",
      },
    });
    const question = questions.find(
      (question: ParticlesQuestion) =>
        question.categoryId === Number(category_id)
    );
    return {
      props: { question },
    };
  };
  const { props } = await getQuestion();
  const question = props.question;

  if (question?.group === "beginner") {
    return <QuestionBeginner params={question} />;
  } else if (question?.group === "intermediate") {
    return <QuestionIntermediate params={question} />;
  } else if (question?.group === "advanced") {
    return <QuestionAdvanced params={question} />;
  }
}

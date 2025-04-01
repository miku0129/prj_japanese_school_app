import prisma from "../../../../../prisma";
import QuestionBeginner from "../components/question-beginner/question-beginner.component";
import QuestionIntermediate from "../components/question-intermediate/question-intermediate.component";
import QuestionAdvanced from "../components/question-advanced/question-advanced.component";

export default async function Page({
  params,
}: {
  params: { category_id: string };
}) {
  const category_id = params.category_id;

  const getQuestion = async () => {
    const questions = await prisma.question.findMany({
      include: {
        additionalQuestion: true,
        choices: {
          include: {
            choice: true,
          },
        },
      },
      where: {
        category: "particles",
      },
    });
    const question = questions.find(
      (question: Question) => question.categoryId === Number(category_id)
    );
    return {
      props: { question },
    };
  };
  const { props } = await getQuestion();
  const question = props.question;

  if (question?.group === "beginner") {
    return <div>{<QuestionBeginner params={question} />}</div>;
  } else if (question?.group === "intermediate") {
    return <div>{<QuestionIntermediate params={question} />}</div>;
  } else if (question?.group === "advanced") {
    return <div>{<QuestionAdvanced params={question} />}</div>;
  }
}

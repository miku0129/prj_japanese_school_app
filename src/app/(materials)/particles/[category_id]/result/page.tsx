import prisma from "../../../../../../prisma";
import Fail from "@/components/fail/fail.component";
import TestPassed from "@/components/test-passed/test-passed.component";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const getQuestions = async () => {
    const questions = await prisma.question.findMany({
      include: {
        additionalQuestion: true,
        choices: {
          include: {
            choice: true,
          },
        },
      },
    });
    return {
      props: { questions },
    };
  };
  const { props } = await getQuestions();
  const questions = props.questions;

  const result = searchParams.state === "true" ? true : false;
  return (
    <div>
      {result && <TestPassed params={questions} />}
      {!result && <Fail />}
    </div>
  );
}
